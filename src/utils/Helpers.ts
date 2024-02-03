import {
  digitsFaToEn,
  isPersian,
  phoneNumberValidator,
} from "@persian-tools/persian-tools";

export function hasNumber(myString: string): boolean {
  return /\d/.test(myString);
}

export function validateEmail(email: string) {
  const re =
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const justPersianLetter = (value: string): boolean => {
  // let result = true;
  // if (typeof value === "undefined") {
  //   result = false;
  // } else if (
  //   !/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$/.test(value)
  // ) {
  //   result = false;
  // }
  return isPersian(value, true);
};

export function isMobile(str: string | number): boolean {
  const digits = digitsFaToEn(str.toString());
  return phoneNumberValidator(digits);
}

export const addCommas = (num?: number | string) =>
  num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const removeNonNumeric = (num: number | string) =>
  num?.toString()?.replace(/[^0-9]/g, "");
