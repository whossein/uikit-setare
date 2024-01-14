import { DefaultTheme } from "styled-components";
import defaultLightColors from "./default-light-colors";
import defaultCommon from "./default-common";

const light: DefaultTheme = {
  ...defaultLightColors,
  ...defaultCommon,
};

export default light;
