import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider as Provider } from "styled-components";
import createTheme from "../../theme";
import { IThemeProvider } from "./UikitProvider.types";
import { useGetTheme } from "../../hooks";
import { ITheme, TThemeMode } from "../../types";
import { dark, light } from "../../theme/default";
import { isSupportMatchMedia } from "../../utils";
import { ISnackBar, SnackBarContainer, SnackbarContext } from "../snackbar";

const lightTheme = createTheme(light);
const darkTheme = createTheme(dark);

export const UikitProvider = (props: IThemeProvider) => {
  const {
    checkOsTheme = true,
    currentTheme = "light",
    themeDark = darkTheme,
    themeLight = lightTheme,
    onThemeChange,
    children,
  } = props;
  const osTheme = useGetTheme();
  const [changeTheme, setChangeTheme] = useState<TThemeMode>(osTheme);
  // snackbar
  const [snackbarState, setSnackbarState] = useState<ISnackBar[]>([]);
  const importSnackbar = (param: ISnackBar) => {
    setSnackbarState([...snackbarState, param]);
  };
  const fillSnackbar = (param: ISnackBar[]) => {
    setSnackbarState(param);
  };
  // snackbar end

  const activeTheme = useMemo<ITheme>(() => {
    let result: ITheme = themeLight;

    if (currentTheme === "light") {
      result = themeLight;
    } else if (currentTheme === "dark") {
      result = themeDark;
    } else {
      if (currentTheme === "dark") {
        result = themeDark;
      } else if (currentTheme === "light") {
        result = themeLight;
      } else if (checkOsTheme) {
        result = osTheme === "dark" ? themeDark : themeLight;
      }
    }

    return result;
  }, [changeTheme, currentTheme]);

  function detectAndChangeTheme() {
    if (checkOsTheme) {
      if (osTheme === "dark" && isSupportMatchMedia) {
        window
          ?.matchMedia("(prefers-color-scheme: dark)")
          ?.addEventListener("change", (e: any) => {
            if (onThemeChange && typeof onThemeChange === "function") {
              onThemeChange();
            }
            setChangeTheme(e.matches ? "dark" : "light");
          });
      }
    }
  }

  useEffect(() => {
    // Add listener to update styles
    // this if for old ios devices, check matchmedia
    detectAndChangeTheme();

    // Remove listener
    return () => {
      detectAndChangeTheme();
    };
  }, []);

  return (
    <Provider theme={activeTheme}>
      <SnackbarContext.Provider
        value={{
          snackbarItem: snackbarState,
          setSnackbarItem: importSnackbar,
          fillSnackbarItem: fillSnackbar,
        }}
      >
        <>
          <SnackBarContainer />
          {children}
        </>
      </SnackbarContext.Provider>
    </Provider>
  );
};

export default UikitProvider;
