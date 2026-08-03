// Central site config. Flip social/subscribe on by filling the empty strings —
// anything left empty is hidden across the site (no broken links).
export const SITE = {
  wordmark: 'devlog', // lowercase mono mark in the masthead; links home
  author: 'Clara Rhee',
  tagline: 'Solo game dev, in public',
  description:
    'Solo game dev, in public. A running log of building games with AI: what worked and what broke.',
  url: 'https://clararhee.com',

  // Contact / social. Empty = hidden.
  email: 'clararhee7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yong-eun-rhee-0640621a2',
  x: '', // e.g. 'https://x.com/yourhandle'
};

// Buttondown username, e.g. "clararhee". Leave "" until the account exists:
// the subscribe form won't render until this is set, so the site is safe to ship now.
export const NEWSLETTER_USER = 'clararhee';

// Title rules:
//   posts        -> "{post title} — devlog"
//   home/about   -> "Clara Rhee — devlog"   (pass SITE.author as the title)
//   og:site_name -> "devlog"
//   RSS channel  -> "devlog — Clara Rhee"
export const titleFor = (lead: string) => `${lead} — ${SITE.wordmark}`;
export const RSS_TITLE = `${SITE.wordmark} — ${SITE.author}`;

// Human-readable label + one-line description per series slug (used for the
// round section header on the home page). Falls back to a prettified slug.
export const SERIES_TITLES: Record<string, string> = {
  'round-1': 'Round 1 · Roblox',
};

export const SERIES_DESCRIPTIONS: Record<string, string> = {
  'round-1': 'Four months, two games, and what I learned.',
};
