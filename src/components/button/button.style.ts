import styled, { css } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IButtonProps } from "./Button.types";

export const ButtonStyle = styled(BaseStyles)<IButtonProps>`
  border: none;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  /* for remove default style */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-border-radius: 0;
  outline: none;

  div {
    color: inherit;
    background: inherit;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant, theme, textColor, borderColor }) => {
    switch (variant) {
      case "fill":
        return css`
          background-color: ${theme.bgColor[5]};
          color: ${textColor ? theme.textColor[textColor] : "#fff"};
          border: ${borderColor &&
          `1px solid ${theme.borderColor[borderColor]}`};

          &:disabled {
            background-color: ${theme.bgColor[8]};
            color: ${textColor ? theme.textColor[textColor] : "#fff"};
          }
        `;
      case "outlined":
        return css`
          background-color: ${theme.bgColor[1]};
          color: ${textColor ? theme.textColor[textColor] : theme.textColor[1]};
          border: solid 1px
            ${borderColor
              ? theme.borderColor[borderColor]
              : theme.borderColor[3]};

          &:disabled {
            color: ${textColor
              ? theme.textColor[textColor]
              : theme.textColor[3]};
            border: solid 1px ${theme.borderColor[3]};
          }
        `;
      case "text":
        return css`
          background-color: transparent;
          color: ${textColor ? theme.textColor[textColor] : theme.textColor[1]};

          &:disabled {
            color: ${textColor
              ? theme.textColor[textColor]
              : theme.textColor[3]};
          }
        `;
      default:
        return null;
    }
  }}
  ${({ size, theme }) => {
    switch (size) {
      case "xsmall":
        return css`
          min-height: 24px;
          /* min-width: 88px; */
          border-radius: 24px;
          font-weight: ${theme.fontWeight.regular};
          font-size: 10px;
          line-height: 16px;
          padding: 2px 12px;
        `;
      case "small":
        return css`
          min-height: 28px;
          /* min-width: 116px; */
          border-radius: 24px;
          font-weight: ${theme.fontWeight.regular};
          font-size: 14px;
          line-height: 16px;
          padding: 2px 12px;
        `;
      case "medium":
        return css`
          min-height: 40px;
          min-width: 160px;
          border-radius: 20px;
          font-weight: ${theme.fontWeight.regular};
          font-size: 16px;
          line-height: 20px;
        `;
      case "large":
        return css`
          min-height: 44px;
          min-width: 255px;
          border-radius: 24px;
          font-weight: ${theme.fontWeight.bold};
          font-size: 16px;
          line-height: 20px;
        `;
      case "xlarge":
        return css`
          min-height: 48px;
          border-radius: 16px;
          font-weight: ${theme.fontWeight.bold};
          font-size: 18px;
          line-height: 22px;
          width: 100%;
          max-width: 100%;
          /* width: 100%; */
        `;
      default:
        return null;
    }
  }}
  ${({ disabled, theme, variant }) => {
    if (disabled) {
      switch (variant) {
        case "fill":
          return css`
            background-color: ${theme.bgColor[8]};
            color: #fff;
          `;
        case "outlined":
          return css`
            color: ${theme.textColor[3]};
            border: solid 1px ${theme.borderColor[3]};
          `;
        case "text":
          return css`
            color: ${theme.textColor[3]};
          `;
        default:
          return null;
      }
    }
  }}
  //change background color
  ${({ colorType, theme, bgColor }) => {
    switch (colorType) {
      case "green":
        return css`
          background-color: ${theme.bgColor[10]};
        `;
      case "orange":
        return css`
          background-color: ${theme.bgColor[11]};
        `;
      default:
        return css`
          background-color: ${bgColor && theme.bgColor[bgColor]};
        `;
    }
  }}
  ${({ loading }) => {
    if (loading) {
      return css`
        cursor: progress;
      `;
    }
  }}
  .morph-button-children {
    height: 100%;
  }

  ${({ height }) => {
    if (height) {
      return css`
        height: ${height}${typeof height === "number" ? "px" : ""};
      `;
    }

    return null;
  }}
`;
