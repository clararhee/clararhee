import { getCollection, type CollectionEntry } from 'astro:content';
import { SERIES_TITLES } from '../consts';

export type Post = CollectionEntry<'blog'>;

/** Published posts (drafts shown only in dev), newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    (p) => import.meta.env.DEV || !p.data.draft
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** Human title for a series slug, e.g. 'round-1' -> 'Round 1'. */
export function seriesTitle(slug: string): string {
  return (
    SERIES_TITLES[slug] ??
    slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export type Round = { series: string; title: string; posts: Post[] };

/** Group posts into rounds (by `series`), plus a loose bucket for unseried posts. */
export function groupBySeries(posts: Post[]): { rounds: Round[]; loose: Post[] } {
  const map = new Map<string, Post[]>();
  const loose: Post[] = [];
  for (const p of posts) {
    if (p.data.series) {
      const arr = map.get(p.data.series) ?? [];
      arr.push(p);
      map.set(p.data.series, arr);
    } else {
      loose.push(p);
    }
  }
  const rounds: Round[] = [...map.entries()].map(([series, ps]) => ({
    series,
    title: seriesTitle(series),
    posts: ps.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)),
  }));
  // Newest round first (by most recent post in each round).
  const latest = (r: Round) =>
    Math.max(...r.posts.map((p) => p.data.pubDate.valueOf()));
  rounds.sort((a, b) => latest(b) - latest(a));
  return { rounds, loose };
}

/** prev/next within the same series, and the round's first ("start here") post. */
export async function getSeriesNeighbors(post: Post): Promise<{
  prev: Post | null;
  next: Post | null;
  startHere: Post | null;
  title: string | null;
}> {
  if (!post.data.series) {
    return { prev: null, next: null, startHere: null, title: null };
  }
  const all = await getPublishedPosts();
  const inSeries = all
    .filter((p) => p.data.series === post.data.series)
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
  const idx = inSeries.findIndex((p) => p.slug === post.slug);
  const first = inSeries[0] ?? null;
  return {
    prev: idx > 0 ? inSeries[idx - 1] : null,
    next: idx >= 0 && idx < inSeries.length - 1 ? inSeries[idx + 1] : null,
    startHere: first && first.slug !== post.slug ? first : null,
    title: seriesTitle(post.data.series),
  };
}

/** All tags across published posts, with counts, sorted by count desc then name. */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPublishedPosts();
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
