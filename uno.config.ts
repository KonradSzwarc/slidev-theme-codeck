import { fileURLToPath } from 'node:url';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { variantMatcher } from '@unocss/preset-mini/utils';
import extractorMdc from '@unocss/extractor-mdc';

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-main/100',
    'bg-code': 'bg-code/100',
    'text-heading': 'text-heading/100',
    'text-content': 'text-content/100',
    'text-caption': 'text-caption/100',
    'border-main': 'border-main/100',
  },
  rules: [
    [
      /^bg-(main|code)\/([.\d]+)$/,
      ([_, type, num]) => ({
        'background-color': `rgba(var(--slidev-theme-${type}-background), ${Number(num) / 100})`,
      }),
    ],
    [
      /^text-(heading|content|caption)\/([.\d]+)$/,
      ([_, type, num]) => ({ color: `rgba(var(--slidev-theme-${type}-text), ${Number(num) / 100})` }),
    ],
    [
      /^border-(main)\/([.\d]+)$/,
      ([_, type, num]) => ({ 'border-color': `rgba(var(--slidev-theme-${type}-border), ${Number(num) / 100})` }),
    ],
    [
      /^grid-areas-([\w|]+)$/,
      ([, areas = '']) => ({
        'grid-template-areas': areas
          .split('|')
          .map((x) => `"${x.replaceAll('_', ' ')}"`)
          .join(' '),
      }),
    ],
  ],
  variants: [
    // `forward:` and `backward:` variant to selectively apply styles based on the direction of the slide
    // For example, `forward:text-red` will only apply to the slides that are navigated forward
    variantMatcher('forward', (input) => ({ prefix: `.slidev-nav-go-forward ${input.prefix}` })),
    variantMatcher('backward', (input) => ({ prefix: `.slidev-nav-go-backward ${input.prefix}` })),
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collectionsNodeResolvePath: fileURLToPath(import.meta.url),
    }),
  ],
  transformers: [transformerDirectives({ enforce: 'pre' }), transformerVariantGroup()],
  extractors: [extractorMdc()],
});
