import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// One social card per post. Cream background + olive accent, Spectral type —
// matching the site. Generated at build time. The default slug appends ".png",
// so routes resolve to /og/<slug>.png.
const posts = await getCollection(
  'blog',
  (p) => import.meta.env.DEV || !p.data.draft
);
const pages = Object.fromEntries(posts.map((p) => [p.slug, p.data]));

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[250, 248, 243]], // cream #faf8f3
    border: { color: [58, 74, 44], width: 16, side: 'inline-start' }, // olive #3a4a2c
    padding: 70,
    font: {
      title: {
        color: [26, 26, 26],
        families: ['Spectral'],
        weight: 'Bold',
        size: 62,
        lineHeight: 1.15,
      },
      description: {
        color: [85, 85, 85],
        families: ['Spectral'],
        size: 30,
        lineHeight: 1.4,
      },
    },
    fonts: [
      './src/assets/og-fonts/Spectral-Bold.ttf',
      './src/assets/og-fonts/Spectral-Regular.ttf',
    ],
  }),
});
