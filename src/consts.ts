// Central site config. Flip social/subscribe on by filling the empty strings —
// anything left empty is hidden across the site (no broken links).
export const SITE = {
  name: 'Clara Rhee',
  tagline: 'Solo game dev, in public',
  description:
    'Solo game dev, in public. A running log of building games with AI: what worked and what broke.',
  url: 'https://clararhee.com',
  author: 'Clara Rhee',

  // Contact / social. Empty = hidden.
  email: 'clararhee7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yong-eun-rhee-0640621a2',
  x: '', // e.g. 'https://x.com/yourhandle'
  substack: '', // e.g. 'https://clararhee.substack.com'
};

// Optional human-readable titles for series slugs used in post frontmatter.
// e.g. SERIES_TITLES['round-1'] -> 'Round 1: Two Games'. Falls back to a
// prettified slug when missing.
export const SERIES_TITLES: Record<string, string> = {
  'round-1': 'Round 1',
};
