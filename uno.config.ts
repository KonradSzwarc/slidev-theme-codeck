import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import type { ConfigBase } from 'unocss';
import { variantMatcher } from '@unocss/preset-mini/utils';
import extractorMdc from '@unocss/extractor-mdc';
import { colors } from '@unocss/preset-mini';
import { parseToHsl } from 'polished';

export default defineConfig({
  safelist: ['!opacity-0', 'prose'],
  shortcuts: [
    {
      'font-header': 'font-$slidev-theme-font-header',
      'font-body': 'font-$slidev-theme-font-body',
      'font-mono': 'font-$slidev-theme-font-mono',

      'bg-default': 'bg-$slidev-theme-color-bg',
      'text-default': 'color-$slidev-theme-color-text',
      'border-default': 'border-$slidev-theme-color-border',

      'border-line': 'border-$slidev-theme-color-border-line',
      'border-table': 'border-$slidev-theme-color-border-table',

      'text-lighted': 'color-$slidev-theme-color-text-lighted',
      'text-dimmed': 'color-$slidev-theme-color-text-dimmed',

      'bg-code': 'bg-$slidev-theme-color-bg-code',
      'text-code': 'color-$slidev-theme-color-text-code',
      'border-code': 'border-$slidev-theme-color-border-code',

      'bg-blockquote': 'bg-$slidev-theme-color-bg-blockquote',
      'text-blockquote': 'color-$slidev-theme-color-text-blockquote',
      'border-blockquote': 'border-$slidev-theme-color-border-blockquote',

      'bg-kbd': 'bg-$slidev-theme-color-bg-kbd',
      'text-kbd': 'color-$slidev-theme-color-text-kbd',
      'border-kbd': 'border-$slidev-theme-color-border-kbd',
    },
    {
      centered: 'flex items-center justify-center',
      'centered-col': 'flex items-center justify-center flex-col',
    },
    [/^centered-(\d+)$/, ([, c]) => `flex items-center justify-center gap-${c}`],
    [/^centered-col-(\d+)$/, ([, c]) => `flex items-center justify-center gap-${c} flex-col`],
  ],
  rules: [...generateColorSchemes()],
  variants: [
    // `forward:` and `backward:` variant to selectively apply styles based on the direction of the slide
    // For example, `forward:text-red` will only apply to the slides that are navigated forward
    variantMatcher('forward', (input) => ({ prefix: `.slidev-nav-go-forward ${input.prefix}` })),
    variantMatcher('backward', (input) => ({ prefix: `.slidev-nav-go-backward ${input.prefix}` })),
  ],
  presets: [presetUno(), presetAttributify(), presetTypography()],
  transformers: [transformerDirectives({ enforce: 'pre' }), transformerVariantGroup()],
  extractors: [extractorMdc()],
});

function generateColorSchemes() {
  const rules: NonNullable<ConfigBase['rules']> = [];

  const colorKeys = Object.entries(colors)
    .filter(([, value]) => typeof value === 'object')
    .map(([key]) => key) as ColorsWithObjectValues;

  rules.push([
    'color-scheme-default',
    {
      '--slidev-theme-color-bg': `light-dark(${colors.white}, ${colors.slate[950]})`,
      '--slidev-theme-color-text': `light-dark(${colors.slate[800]}, ${colors.slate[200]})`,
      '--slidev-theme-color-border': 'transparent',

      '--slidev-theme-color-border-line': `light-dark(${colors.slate[300]}, ${colors.slate[700]})`,
      '--slidev-theme-color-border-table': `var(--slidev-theme-color-border-line)`,

      '--slidev-theme-color-text-lighted': `light-dark(${colors.slate[900]}, ${colors.white})`,
      '--slidev-theme-color-text-dimmed': `light-dark(${colors.slate[500]}, ${colors.slate[400]})`,

      '--slidev-theme-color-bg-code': `light-dark(${colors.slate[200]}, ${colors.slate[800]})`,
      '--slidev-theme-color-text-code': `light-dark(${colors.slate[900]}, ${colors.white})`,
      '--slidev-theme-color-border-code': `var(--slidev-theme-color-border-line)`,

      '--slidev-theme-color-bg-blockquote': `var(--slidev-theme-color-bg-code)`,
      '--slidev-theme-color-text-blockquote': `var(--slidev-theme-color-text-code)`,
      '--slidev-theme-color-border-blockquote': `var(--slidev-theme-color-border-code)`,

      '--slidev-theme-color-bg-kbd': `var(--slidev-theme-color-bg-code)`,
      '--slidev-theme-color-text-kbd': `var(--slidev-theme-color-text-code)`,
      '--slidev-theme-color-border-kbd': `var(--slidev-theme-color-border-code)`,
    },
  ]);

  for (const color of colorKeys) {
    rules.push([
      `color-scheme-${color}-outline`,
      {
        '--slidev-theme-color-bg': `light-dark(${colors[color][100]}, ${colors[color][950]})`,
        '--slidev-theme-color-text': `light-dark(${colors[color][600]}, ${colors[color][300]})`,
        '--slidev-theme-color-border': `var(--slidev-theme-color-border-line)`,

        '--slidev-theme-color-border-line': `light-dark(${colors[color][400]}, ${colors[color][600]})`,

        '--slidev-theme-color-text-lighted': `light-dark(${colors[color][600]}, ${colors[color][100]})`,
        '--slidev-theme-color-text-dimmed': `light-dark(${colors[color][400]}, ${colors[color][400]})`,

        '--slidev-theme-color-bg-code': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
        '--slidev-theme-color-text-code': `light-dark(${colors[color][600]}, ${colors[color][300]})`,
      },
    ]);

    rules.push([
      `color-scheme-${color}-light`,
      {
        '--slidev-theme-color-bg': `light-dark(${colors[color][100]}, ${colors[color][900]})`,
        '--slidev-theme-color-text': `light-dark(${colors[color][600]}, ${colors[color][200]})`,
        '--slidev-theme-color-border': `transparent`,

        '--slidev-theme-color-border-line': `light-dark(${colors[color][400]}, ${colors[color][600]})`,

        '--slidev-theme-color-text-lighted': `light-dark(${colors[color][700]}, ${colors[color][50]})`,
        '--slidev-theme-color-text-dimmed': `light-dark(${colors[color][500]}, ${colors[color][300]})`,

        '--slidev-theme-color-bg-code': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
        '--slidev-theme-color-text-code': `light-dark(${colors[color][600]}, ${colors[color][200]})`,
      },
    ]);

    rules.push([
      `color-scheme-${color}-filled`,
      {
        '--slidev-theme-color-bg': colors[color][500],
        '--slidev-theme-color-text': colors[color][50],
        '--slidev-theme-color-border': `transparent`,

        '--slidev-theme-color-border-line': colors[color][300],

        '--slidev-theme-color-text-lighted': colors.white,
        '--slidev-theme-color-text-dimmed': colors[color][100],

        '--slidev-theme-color-bg-code': colors[color][600],
        '--slidev-theme-color-text-code': colors[color][50],
      },
    ]);

    rules.push([
      `color-scheme-${color}-glass`,
      {
        '--slidev-theme-color-bg': `light-dark(${hsla(colors[color][600], 0.12)}, ${hsla(colors[color][400], 0.12)})`,
        '--slidev-theme-color-text': `light-dark(${hsla(colors[color][800], 0.8)}, ${hsla(colors[color][200], 0.8)})`,
        '--slidev-theme-color-border': `var(--slidev-theme-color-border-line)`,

        '--slidev-theme-color-border-line': `light-dark(${hsla(colors[color][600], 0.3)}, ${hsla(colors[color][400], 0.3)})`,

        '--slidev-theme-color-text-lighted': `light-dark(${hsla(colors[color][800], 0.9)}, ${hsla(colors[color][200], 0.9)})`,
        '--slidev-theme-color-text-dimmed': `light-dark(${hsla(colors[color][800], 0.7)}, ${hsla(colors[color][200], 0.7)})`,

        '--slidev-theme-color-bg-code': `light-dark(${hsla(colors.black, 0.06)}, ${hsla(colors.white, 0.1)})`,
        '--slidev-theme-color-text-code': `light-dark(${hsla(colors[color][800], 0.85)}, ${hsla(colors[color][200], 0.85)})`,
      },
    ]);
  }

  return rules;
}

type ColorsWithObjectValues = {
  [K in keyof typeof colors]: (typeof colors)[K] extends Record<string, unknown> ? K : never;
}[keyof typeof colors][];

function hsla(hex: string, alpha: number) {
  const { hue, saturation, lightness } = parseToHsl(hex);
  return `hsla(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%, ${alpha})`;
}
