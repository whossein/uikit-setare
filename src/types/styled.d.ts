import "styled-components";
import { ITheme } from "./theme.types";

type CustomTheme = typeof ITheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
