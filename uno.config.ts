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
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        ...Object.fromEntries(getColorKeys().map((key) => [key, `rgba(var(--color-${key}), <alpha-value>)`])),
      },
    };
  },
});

function getColorKeys() {
  return [
    'rosewater',
    'flamingo',
    'pink',
    'purple',
    'red',
    'rose',
    'orange',
    'yellow',
    'green',
    'teal',
    'sky',
    'cyan',
    'blue',
    'indigo',
    'title',
    'body',
    'subtext1',
    'subtext0',
    'overlay2',
    'overlay1',
    'overlay0',
    'surface2',
    'surface1',
    'surface0',
    'pane',
    'mantle',
    'crust',
  ];
}
