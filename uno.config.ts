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

    'text-primary': 'color-$slidev-theme-text-primary',
    'text-secondary': 'color-$slidev-theme-text-secondary',
    'text-tertiary': 'color-$slidev-theme-text-tertiary',

    'bg-slide': 'bg-$slidev-theme-slide-background',
    'text-slide': 'color-$slidev-theme-slide-text',
    'border-slide': 'border-$slidev-theme-slide-border',

    'bg-code': 'bg-$slidev-theme-code-background',
    'border-code': 'border-$slidev-theme-code-border',
    'text-code': 'color-$slidev-theme-code-text',

    'bg-accent': 'bg-$slidev-theme-accent-background', // background of the element
    'text-accent': 'color-$slidev-theme-accent-text', // text color within the element
    'border-accent': 'border-$slidev-theme-accent-border', // border color within the element
    'outline-accent': 'border-$slidev-theme-accent-outline', // border color around the element
    'bg-code-accent': 'bg-$slidev-theme-accent-code-background', // code block background color
    'text-code-accent': 'color-$slidev-theme-accent-code-text', // code block text color
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
    addScheme(`accent-scheme-${color}-outline`, {
      '--slidev-theme-accent-background': `light-dark(${colors[color][100]}, ${colors[color][900]})`,
      '--slidev-theme-accent-text': `light-dark(${colors[color][600]}, ${colors[color][300]})`,
      '--slidev-theme-accent-border': `light-dark(${colors[color][400]}, ${colors[color][600]})`,
      '--slidev-theme-accent-outline': `var(--slidev-theme-accent-border)`,
      '--slidev-theme-accent-code-background': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
      '--slidev-theme-accent-code-text': `light-dark(${colors[color][600]}, ${colors[color][400]})`,
    });

    addScheme(`accent-scheme-${color}-light`, {
      '--slidev-theme-accent-background': `light-dark(${colors[color][100]}, ${colors[color][900]})`,
      '--slidev-theme-accent-text': `light-dark(${colors[color][500]}, ${colors[color][200]})`,
      '--slidev-theme-accent-border': `light-dark(${colors[color][400]}, ${colors[color][600]})`,
      '--slidev-theme-accent-outline': `transparent`,
      '--slidev-theme-accent-code-background': `light-dark(${colors[color][200]}, ${colors[color][800]})`,
      '--slidev-theme-accent-code-text': `light-dark(${colors[color][600]}, ${colors[color][200]})`,
    });

    addScheme(`accent-scheme-${color}-filled`, {
      '--slidev-theme-accent-background': colors[color][500],
      '--slidev-theme-accent-text': colors.white,
      '--slidev-theme-accent-border': colors[color][300],
      '--slidev-theme-accent-outline': `transparent`,
      '--slidev-theme-accent-code-background': colors[color][600],
      '--slidev-theme-accent-code-text': colors[color][50],
    });

    addScheme(`accent-scheme-${color}-glass`, {
      '--slidev-theme-accent-background': `light-dark(${hsla(colors[color][600], 0.1)}, ${hsla(colors[color][400], 0.1)})`,
      '--slidev-theme-accent-text': `light-dark(${colors[color][700]}, ${colors[color][300]})`,
      '--slidev-theme-accent-border': `light-dark(${hsla(colors[color][600], 0.3)}, ${hsla(colors[color][400], 0.3)})`,
      '--slidev-theme-accent-outline': `var(--slidev-theme-accent-border)`,
      '--slidev-theme-accent-code-background': `light-dark(${hsla(colors.white, 0.9)}, ${hsla(colors.white, 0.1)})`,
      '--slidev-theme-accent-code-text': `light-dark(${colors[color][700]}, ${colors[color][200]})`,
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
