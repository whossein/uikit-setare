import { HTMLAttributes } from "react";
import { IBaseProps } from "../base/Base.types";

export type TPureInput = IBaseProps & HTMLAttributes<HTMLInputElement>;

export interface IInput {
  placeholder?: string | number | null;
  label?: string | React.ReactNode;
  shrink?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type?: "text" | "number" | "tel" | "password";
  value?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  autoFocus?: boolean;
  helpText?: React.ReactNode;
  helpTextColor?: "Error" | "Info" | "Success";
  helpIcon?: "Error" | "Info" | "Success" | "none";
  helpTextShow?: boolean;
  showLimitChar?: boolean;
  maxLength?: number;
  isError?: boolean;
  onInputChange?: (
    value: string,
    status?: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  defaultValue?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  hasSeparatedNumber?: boolean;
  validation?: "none" | "onlyText" | "onlyPersianText" | "isMobile" | "isEmail";
  notEntryOnError?: boolean;
  direction?: "rtl" | "ltr";
  autoComplete?: string;
  inputMode?: InputModeTypes;
  onEnter?: (
    value?: string,
    status?: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  name?: string;
}

export type InputModeTypes =
  | "verbatim"
  | "latin"
  | "latin-name"
  | "latin-prose"
  | "full-width-latin"
  | "kana"
  | "kana-name"
  | "katakana"
  | "numeric"
  | "tel"
  | "email"
  | "url"
  | "none";

export type mainType = TPureInput & IInput;

export interface IInputStyle extends mainType {
  $hasStartIcon?: boolean;
  $disabled?: boolean;
}
