import ITheme, { TThemeMode } from "../../types/theme.types";

export interface IThemeProvider {
  themeLight?: ITheme;
  themeDark?: ITheme;
  currentTheme?: TThemeMode | string;
  checkOsTheme?: boolean;
  onThemeChange?: () => void;
  children?: React.ReactNode | React.ReactElement;
}
