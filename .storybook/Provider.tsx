import React, { ReactNode } from "react";
import { ITheme, UikitProvider } from "../src";

export const Provider = <TTheme,>({
  children,
  theme,
}: {
  children?: ReactNode;
  theme?: ITheme;
}) => {
  return (
    <UikitProvider
      themeLight={theme}
      themeDark={theme}
      currentTheme={theme?.name}
      checkOsTheme={false}
    >
      {children}
    </UikitProvider>
  );
};
