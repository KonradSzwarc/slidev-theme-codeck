import { defineConfig } from 'vite';
// @ts-expect-error - no types available
import markdownItSub from 'markdown-it-sub';
// @ts-expect-error - no types available
import markdownItSup from 'markdown-it-sup';
// @ts-expect-error - no types available
import markdownItMark from 'markdown-it-mark';
// @ts-expect-error - no types available
import markdownItIns from 'markdown-it-ins';

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(markdownItSub);
        md.use(markdownItSup);
        md.use(markdownItMark);
        md.use(markdownItIns);
      },
    },
  },
});
