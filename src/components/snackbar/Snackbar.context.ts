import { createContext } from "react";
import { ISnackbarContext } from "./Snackbar.types";

let initData: ISnackbarContext = {
  snackbarItem: [],
  setSnackbarItem: () => {},
  fillSnackbarItem: () => {},
};
export const SnackbarContext = createContext<ISnackbarContext>(initData);
