import styled, { css } from "styled-components";
import { TBooleanString } from "../../types";
import { IBaseProps } from "./Base.types";

export const BaseStyles = styled.span<
  Partial<
    IBaseProps & { isfixbottom: TBooleanString; fillpadding: TBooleanString }
  >
>`
  box-sizing: border-box;
  max-width: 100%;
  ${({ isfixbottom, fillpadding }) => {
    if (isfixbottom === "true") {
      return css`
        position: fixed;
        max-width: 536px;
        left: 50%;
        transform: translateX(-50%);
        padding: ${fillpadding === "true" ? "20px" : "20px 20px 0px"};
        bottom: 12px;
        @media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
          bottom: calc(40px - 20px);
        }
      `;
    }
  }}
  ${({ needPaddingTop }) => {
    if (needPaddingTop) {
      return css`
        padding-bottom: 12px;
        @media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
          padding-bottom: 40px;
        }
      `;
    }
  }}
  ${({ theme, bgColor }) => {
    if (bgColor && theme.bgColor && theme.bgColor[bgColor]) {
      return css`
        background: ${theme.bgColor[bgColor]};
      `;
    }

    return null;
  }}
  ${({ theme, bgColorOperator }) => {
    if (bgColorOperator && theme.operator && theme.operator[bgColorOperator]) {
      return css`
        background: ${theme.operator[bgColorOperator]};
      `;
    }

    return null;
  }}
  ${({ theme, transparentColor }) => {
    if (
      transparentColor &&
      theme.transparentColor &&
      theme.transparentColor[transparentColor]
    ) {
      return css`
        background: ${theme.transparentColor[transparentColor]};
      `;
    }

    return null;
  }}
  ${({ theme, textColor = 1 }) => {
    if (textColor && theme.textColor && theme.textColor[textColor]) {
      return css`
        color: ${theme.textColor[textColor]};
      `;
    }

    return null;
  }}
  ${({ theme, shadow }) => {
    if (shadow && theme.shadow && theme.shadow[shadow]) {
      return css`
        box-shadow: ${theme.shadow[shadow]};
      `;
    }

    return null;
  }}

  ${({ theme, fontWeight = "regular" }) => {
    if (fontWeight && theme.fontWeight && theme.fontWeight[fontWeight]) {
      return css`
        font-weight: ${theme.fontWeight[fontWeight]};
      `;
    }

    return null;
  }}

  ${({ fontSize }) => {
    if (fontSize) {
      return css`
        font-size: ${fontSize}px;
      `;
    }
    return null;
  }}

  ${({ borderRadius }) => {
    if (typeof borderRadius !== "undefined") {
      return css`
        border-radius: ${borderRadius}px;
      `;
    }
    return null;
  }}

${({ textAlign }) => {
    if (textAlign) {
      return css`
        text-align: ${textAlign};
      `;
    }
    return null;
  }}
  
  ${({ borderColor, borderSize = "1", theme }) => {
    if (
      borderColor &&
      borderSize &&
      theme.borderColor &&
      theme.borderColor[borderColor]
    ) {
      return css`
        border: solid ${borderSize}px ${theme.borderColor[borderColor]};
      `;
    }
    return null;
  }}
  //////////////////////// padding
  ${({ padding }) => {
    if (padding) {
      return css`
        padding: ${padding};
      `;
    }
    return null;
  }}
  
  ${({ pt }) => {
    if (typeof pt !== "undefined") {
      return css`
        padding-top: ${pt}px;
      `;
    }
    return null;
  }}
  ${({ pb }) => {
    if (typeof pb !== "undefined") {
      return css`
        padding-bottom: ${pb}px;
      `;
    }
    return null;
  }}
  ${({ pr }) => {
    if (typeof pr !== "undefined") {
      return css`
        padding-right: ${pr}px;
      `;
    }
    return null;
  }}
  ${({ pl }) => {
    if (typeof pl !== "undefined") {
      return css`
        padding-left: ${pl}px;
      `;
    }
    return null;
  }}
  
  ///////////////////////////////// margin
   ${({ margin }) => {
    if (margin) {
      return css`
        margin: ${margin};
      `;
    }
    return null;
  }}
  ${({ mt }) => {
    if (mt) {
      return css`
        margin-top: ${mt}px;
      `;
    }
    return null;
  }}
  ${({ mb }) => {
    if (typeof mb !== "undefined") {
      return css`
        margin-bottom: ${mb}px;
      `;
    }
    return null;
  }}
  ${({ mr }) => {
    if (typeof mr !== "undefined") {
      return css`
        margin-right: ${mr}px;
      `;
    }
    return null;
  }}
  ${({ ml }) => {
    if (typeof ml !== "undefined") {
      return css`
        margin-left: ${ml}px;
      `;
    }
    return null;
  }}
  ${({ dir }) => {
    if (dir) {
      return css`
        direction: ${dir};
      `;
    }

    return null;
  }}
  ${({ width }) => {
    if (width) {
      return css`
        width: ${width}${typeof width === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
  ${({ height }) => {
    if (height) {
      return css`
        height: ${height}${typeof height === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
  ${({ minWidth }) => {
    if (minWidth) {
      return css`
        min-width: ${minWidth}${typeof minWidth === "number" ? "px" : ""}!important;
      `;
    }

    return null;
  }}
  ${({ minHeight }) => {
    if (minHeight) {
      return css`
        min-height: ${minHeight}${typeof minHeight === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
  
  ${({ maxWidth }) => {
    if (maxWidth) {
      return css`
        max-width: ${maxWidth}${typeof maxWidth === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
  ${({ maxHeight }) => {
    if (maxHeight) {
      return css`
        max-height: ${maxHeight}${typeof maxHeight === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
  
  ${({ flex }) => {
    if (flex) {
      return css`
        flex: ${flex};
      `;
    }

    return null;
  }}

  ${({ rotate }) => {
    if (rotate) {
      return css`
        transform: rotate(${rotate}deg);
      `;
    }

    return null;
  }}

  ${({ position }) => {
    if (position) {
      return css`
        position: ${position};
      `;
    }

    return null;
  }}
`;
