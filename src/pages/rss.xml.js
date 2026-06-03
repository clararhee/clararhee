import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // The feed only ever carries published posts — never drafts.
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'DevLog',
    description: 'Building games solo with AI — what worked and what broke.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.slug}/`,
    })),
  });
}
