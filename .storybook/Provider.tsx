import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const Provider = <TTheme,>({
  children,
  theme,
}: {
  children?: ReactNode;
  theme?: TTheme;
}) => {
  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
};
