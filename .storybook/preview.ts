import type { Preview } from "@storybook/react";
import { withThemeProvider } from "storybook-addon-theme-provider";
import createTheme from "../src/theme";
import { Provider } from "./Provider";
import ITheme from "../src/types/theme.types";
import dark from "../src/theme/default/default-dark-colors";

const lightTheme = createTheme({
  name: "light",
});
const darkTheme = createTheme({
  name: "dark",
  bgColor: dark.bgColor,
  borderColor: dark.borderColor,
  textColor: dark.textColor,
  transparentColor: dark.transparentColor,
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
        name: "light",
        themeObject: lightTheme,
        color: "white",
      },
      {
        name: "dark",
        themeObject: darkTheme,
        color: "black",
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
