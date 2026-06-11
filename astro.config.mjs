import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkLang } from './src/plugins/remark-lang.mjs';

// Custom domain deployment:
//   - `site` is the final custom domain (replace below once decided).
//   - `base` stays at '/' (served from the domain root).
//   - public/CNAME holds the domain so GitHub Pages keeps it on each deploy.
//
// If you instead deploy to https://<username>.github.io/<repo> (no custom domain):
//   - set `site: 'https://<username>.github.io'`
//   - set `base: '/<repo>'`
//   - delete public/CNAME
//   - use Astro's base-aware helpers for links (import.meta.env.BASE_URL).
export default defineConfig({
  site: 'https://clararhee.com',
  base: '/',
  integrations: [sitemap()],
  markdown: {
    // Disable Astro's built-in GFM so we can re-add it with singleTilde off:
    // a single ~ stays literal (for "~$929" approximations); only ~~ strikes.
    gfm: false,
    remarkPlugins: [
      [remarkGfm, { singleTilde: false }],
      remarkDirective,
      remarkLang,
      remarkReadingTime,
    ],
    // External links in post bodies open in a new tab (internal links unaffected).
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
    shikiConfig: {
      // Light-only design (per site-design-spec) — single light theme.
      theme: 'github-light',
      wrap: true,
    },
  },
});
