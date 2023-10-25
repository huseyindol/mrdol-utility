import type { Preview } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import '../app/globals.css';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

export const decorators = [
  withThemeFromJSXProvider({
    Provider: Theme,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
