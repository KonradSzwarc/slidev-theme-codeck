// Specify only the rules that cannot be defined within the .editorconfig file as Prettier inherits config from there.
// See: https://prettier.io/docs/en/configuration.html#editorconfig

/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['example.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev'],
      },
    },
  ],
};

export default config;
