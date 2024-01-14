import type { Preview } from "@storybook/react";
import { withThemeProvider } from "storybook-addon-theme-provider";
import createTheme from "../src/theme";
import { Provider } from "./Provider";
import ITheme from "../src/types/theme.types";

const theme1 = createTheme({
  name: "light",
});
const theme2 = createTheme({
  name: "dark",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider(Provider<ITheme>)],
  globals: {
    selectedTheme: "theme1",
    themes: [
      {
        // Provide a name for the theme.
        name: "theme1",
        color: "green",
        themeObject: theme1,
      },
      {
        name: "theme2",
        color: "red",
        themeObject: theme2,
      },
    ],
  },
};

// addParameters({
//   styledComponentsThemes: {
//     /**
//      * Themes
//      */
//     themes: [ThemeA, ThemeB],
//     /**
//      * Theme to start on - index - optional
//      */
//     initialTheme: 1, // optional
//     /**
//      *  Key for show name of theme - optional
//      */
//     label: 'name', // optional
//   },
// });

// addDecorator(story => (
//   <WithThemeProvider>
//       {story()}
//   </WithThemeProvider>
// ));

export default preview;
