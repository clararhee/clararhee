import { visit } from 'unist-util-visit';

// Turn `:::en` / `:::ko` container directives into <div class="lang lang-en|ko">.
// The CSS language toggle (pure CSS, see global.css) shows/hides these.
// Markdown inside the blocks is parsed normally.
export function remarkLang() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' &&
        (node.name === 'en' || node.name === 'ko')
      ) {
        const data = node.data || (node.data = {});
        data.hName = 'div';
        data.hProperties = { class: `lang lang-${node.name}` };
      }
    });
  };
}
