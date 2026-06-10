import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
    shikiConfig: {
      // Light-only design (per site-design-spec) — single light theme.
      theme: 'github-light',
      wrap: true,
    },
  },
});
