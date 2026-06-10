import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// Build-time reading time. Injects `minutesRead` into each post's frontmatter,
// readable via `const { remarkPluginFrontmatter } = await post.render()`.
// No client JS — computed once at build.
export function remarkReadingTime() {
  return (tree, file) => {
    const textOnPage = toString(tree);
    const { minutes } = getReadingTime(textOnPage);
    file.data.astro.frontmatter.minutesRead = Math.max(1, Math.round(minutes));
  };
}
