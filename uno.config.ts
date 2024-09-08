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
import { transparentize } from 'polished';
import { colors } from '@unocss/preset-mini/colors';
import type { ConfigBase, CSSObject } from 'unocss';

const schemes = generateColorSchemes();

export default defineConfig({
  safelist: [...schemes.classes],
  shortcuts: {
    'bg-main': 'bg-main/100',
    'bg-code': 'bg-code/100',
    'text-heading': 'text-heading/100',
    'text-content': 'text-content/100',
    'text-caption': 'text-caption/100',
    'border-main': 'border-main/100',
  },
  rules: [
    ...schemes.rules,
    ['bg-accent', { 'background-color': 'var(--slidev-theme-accent-background)' }],
    ['text-accent', { color: 'var(--slidev-theme-accent-text)' }],
    ['border-accent', { 'border-color': 'var(--slidev-theme-accent-border)' }],
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

function generateColorSchemes() {
  // prettier-ignore
  const colorKeys = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as const;

  const rules: NonNullable<ConfigBase['rules']> = [];
  const classes: string[] = [];

  const addScheme = (name: string, styles: CSSObject) => {
    rules.push([name, styles]);
    classes.push(name);
  };

  for (const color of colorKeys) {
    addScheme(`accent-scheme-${color}-outline`, {
      '--slidev-theme-accent-background': transparentize(0.9, colors[color][500]),
      '--slidev-theme-accent-text': `light-dark(${colors[color][700]}, ${colors[color][400]})`,
      '--slidev-theme-accent-border': transparentize(0.8, colors[color][500]),
    });

    addScheme(`accent-scheme-${color}-filled`, {
      '--slidev-theme-accent-background': `light-dark(${colors[color][800]}, ${colors[color][200]})`,
      '--slidev-theme-accent-text': `light-dark(${colors[color][50]}, ${colors[color][900]})`,
      '--slidev-theme-accent-border': `light-dark(${colors[color][800]}, ${colors[color][200]})`,
    });
  }

  return { rules, classes };
}
