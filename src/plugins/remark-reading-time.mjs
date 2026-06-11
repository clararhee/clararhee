import getReadingTime from 'reading-time';
import { visit, SKIP } from 'unist-util-visit';

// Build-time reading time. Injects `minutesRead` into each post's frontmatter,
// readable via `const { remarkPluginFrontmatter } = await post.render()`.
// No client JS — computed once at build.
//
// In bilingual posts (`:::en` / `:::ko` blocks), the Korean block is skipped so
// the estimate reflects the default (English) reading, not both languages.
export function remarkReadingTime() {
  return (tree, file) => {
    let text = '';
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'ko') return SKIP;
      if (node.type === 'text' || node.type === 'inlineCode') {
        text += node.value + ' ';
      }
    });
    const { minutes } = getReadingTime(text);
    file.data.astro.frontmatter.minutesRead = Math.max(1, Math.round(minutes));
  };
}
