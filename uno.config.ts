import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import type { ConfigBase, CSSObject } from 'unocss';
import { variantMatcher } from '@unocss/preset-mini/utils';
import extractorMdc from '@unocss/extractor-mdc';
import { colors } from '@unocss/preset-mini';
import { parseToHsl } from 'polished';

const schemes = generateColorSchemes();

export default defineConfig({
  safelist: ['!opacity-0', 'prose', ...schemes.classes],
  shortcuts: {
    'font-header': 'font-$slidev-theme-font-header',
    'font-body': 'font-$slidev-theme-font-body',
    'font-mono': 'font-$slidev-theme-font-mono',

    'bg-default': 'bg-$slidev-theme-color-bg',
    'text-default': 'color-$slidev-theme-color-text',
    'line-default': 'border-$slidev-theme-color-line',
    'border-default': 'border-$slidev-theme-color-border',

    'text-lighted': 'color-$slidev-theme-color-text-lighted',
    'text-dimmed': 'color-$slidev-theme-color-text-dimmed',

    'bg-code': 'bg-$slidev-theme-color-code-bg',
    'text-code': 'color-$slidev-theme-color-code-text',
    'border-code': 'border-$slidev-theme-color-code-border',
  },
  rules: [...schemes.rules],
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
  const classes: string[] = [];

  const addScheme = (name: string, styles: CSSObject) => {
    rules.push([name, styles]);
    classes.push(name);
  };

  const colorKeys = Object.entries(colors)
    .filter(([, value]) => typeof value === 'object')
    .map(([key]) => key) as ColorsWithObjectValues;

  for (const color of colorKeys) {
    addScheme(`color-scheme-${color}-outline`, {
      '--slidev-theme-color-bg': `light-dark(${colors[color][50]}, ${colors[color][950]})`,
      '--slidev-theme-color-text': `light-dark(${colors[color][500]}, ${colors[color][300]})`,
      '--slidev-theme-color-text-lighted': `light-dark(${colors[color][600]}, ${colors[color][300]})`,
      '--slidev-theme-color-text-dimmed': `light-dark(${colors[color][600]}, ${colors[color][300]})`,
      '--slidev-theme-color-line': `light-dark(${colors[color][400]}, ${colors[color][600]})`,
      '--slidev-theme-color-border': `var(--slidev-theme-color-line)`,
      '--slidev-theme-color-code-bg': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
      '--slidev-theme-color-code-text': `light-dark(${colors[color][600]}, ${colors[color][400]})`,
    });

    addScheme(`color-scheme-${color}-light`, {
      '--slidev-theme-color-bg': `light-dark(${colors[color][100]}, ${colors[color][900]})`,
      '--slidev-theme-color-text': `light-dark(${colors[color][600]}, ${colors[color][200]})`,
      '--slidev-theme-color-text-lighted': `light-dark(${colors[color][500]}, ${colors[color][200]})`,
      '--slidev-theme-color-text-dimmed': `light-dark(${colors[color][500]}, ${colors[color][200]})`,
      '--slidev-theme-color-line': `light-dark(${colors[color][400]}, ${colors[color][600]})`,
      '--slidev-theme-color-border': `transparent`,
      '--slidev-theme-color-code-bg': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
      '--slidev-theme-color-code-text': `light-dark(${colors[color][600]}, ${colors[color][200]})`,
    });

    addScheme(`color-scheme-${color}-filled`, {
      '--slidev-theme-color-bg': colors[color][500],
      '--slidev-theme-color-text': colors.white,
      '--slidev-theme-color-text-lighted': colors.white,
      '--slidev-theme-color-text-dimmed': colors.white,
      '--slidev-theme-color-line': colors[color][300],
      '--slidev-theme-color-border': `transparent`,
      '--slidev-theme-color-code-bg': colors[color][600],
      '--slidev-theme-color-code-text': colors[color][50],
    });

    addScheme(`color-scheme-${color}-glass`, {
      '--slidev-theme-color-bg': `light-dark(${hsla(colors[color][600], 0.1)}, ${hsla(colors[color][400], 0.1)})`,
      '--slidev-theme-color-text': `light-dark(${colors[color][700]}, ${colors[color][300]})`,
      '--slidev-theme-color-text-lighted': `light-dark(${colors[color][700]}, ${colors[color][300]})`,
      '--slidev-theme-color-text-dimmed': `light-dark(${colors[color][700]}, ${colors[color][300]})`,
      '--slidev-theme-color-line': `light-dark(${hsla(colors[color][600], 0.3)}, ${hsla(colors[color][400], 0.3)})`,
      '--slidev-theme-color-border': `var(--slidev-theme-color-line)`,
      '--slidev-theme-color-code-bg': `light-dark(${hsla(colors.white, 0.9)}, ${hsla(colors.white, 0.1)})`,
      '--slidev-theme-color-code-text': `light-dark(${colors[color][700]}, ${colors[color][200]})`,
    });
  }

  return { rules, classes };
}

type ColorsWithObjectValues = {
  [K in keyof typeof colors]: (typeof colors)[K] extends Record<string, unknown> ? K : never;
}[keyof typeof colors][];

function hsla(hex: string, alpha: number) {
  const { hue, saturation, lightness } = parseToHsl(hex);
  return `hsla(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%, ${alpha})`;
}
