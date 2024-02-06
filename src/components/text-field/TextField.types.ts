export interface ITextField {
  label?: string | React.ReactNode;
  shrink?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  helpText?: React.ReactNode | string;
  helpTextType?: "Error" | "Info" | "Success" | "None";
  showLimitChar?: boolean;
  isError?: boolean;
  multiline?: boolean;
  fullWidth?: boolean;
  hasSeparatedNumber?: boolean;
  rows?: number;
  value?: any;
  name?: string;
}

export interface ITextFieldContainer {
  $showTitle: boolean;
  $hasError: boolean;
  $hasIcon: boolean;
}
