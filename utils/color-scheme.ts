type ColorScheme = {
  color?: string;
  scheme?: string;
};

export type WithColorScheme<T> = T & ColorScheme;

export const colorSchemeClass = ({ color, scheme }: ColorScheme) =>
  color && scheme ? `color-scheme-${color}-${scheme}` : '';
