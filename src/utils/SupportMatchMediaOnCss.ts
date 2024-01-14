export const supportMatchMediaOnCss =
  window &&
  typeof window.matchMedia !== "undefined" &&
  typeof window?.matchMedia("(prefers-color-scheme: dark)")?.matches !==
    "undefined";

export default supportMatchMediaOnCss;
