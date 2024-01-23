export interface ISnackBar {
  message?: string | undefined | null;
  hasTimer?: boolean;
  hasCancel?: boolean;
  id?: number;
  afterHide?(): void;
}
export interface ISnackbarContext {
  snackbarItem: ISnackBar[];
  setSnackbarItem: (item: ISnackBar) => void;
  fillSnackbarItem: (item: ISnackBar[]) => void;
}
