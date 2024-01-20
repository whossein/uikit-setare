import styled, { css } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { ITextProps, TWhiteSpace } from "./Text.types";
import { TBooleanString } from "../../types";
import {
  DefaultEnglishFontFamily,
  DefaultPersianFontFamily,
} from "../../theme/create-typography";

export const TextStyle = styled(BaseStyles)<
  Partial<
    ITextProps & {
      $useLtrFontFamily?: TBooleanString;
      $whiteSpace?: TWhiteSpace;
    }
  >
>`
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : "1.5")};

  ${({ variant }) => {
    switch (variant) {
      case "headline":
        return css`
          font-size: 22px;
          line-height: 38px;
        `;
      case "title1":
        return css`
          font-size: 18px;
          line-height: 30px;
        `;
      case "title2":
        return css`
          font-size: 16px;
          line-height: 28px;
        `;
      case "body":
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      case "caption1":
        return css`
          font-size: 12px;
          line-height: 20px;
        `;
      case "caption2":
        return css`
          font-size: 10px;
          line-height: 16px;
        `;
      default:
        return css``;
    }
  }}

  ${({ useLtrFontFamily = false, theme }) => {
    const htmlElm = document.querySelector("html");
    const isRtr = htmlElm?.dir === "rtl" || true;
    if (useLtrFontFamily || (theme && theme.autoSetLtrFontFamily && !isRtr)) {
      return css`
        font-family: ${DefaultEnglishFontFamily};
      `;
    }

    return css`
      font-family: ${DefaultPersianFontFamily};
    `;
  }}

  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
  white-space: ${({ whiteSpace }) => (whiteSpace ? whiteSpace : "nowrap")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "normal"};
`;
