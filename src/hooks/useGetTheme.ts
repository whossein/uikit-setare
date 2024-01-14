import { useMemo } from "react";
import { isSupportMatchMedia } from "../utils";

// if get "light", possible window.mathMedia is undefined
export const useGetTheme = () => {
  let osTheme = useMemo<"dark" | "light">(() => {
    let res: "light" | "dark" = "light";

    if (isSupportMatchMedia) {
      res = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return res;
  }, []);

  return osTheme;
};

export default useGetTheme;
