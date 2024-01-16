import "styled-components";
import { ITheme } from "./theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
