import { styled } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IRadioButtonProps } from "./RadioButton.types";

export const RadioButtonLabel = styled(BaseStyles)<IRadioButtonProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  padding: 4px;
  margin-bottom: ${({ mode }) => mode === "onlyLabel" && "2px"};

  position: relative;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ mode, theme }) => mode === "box" && theme.bgColor[6]};
  width: ${({ mode }) => mode === "box" && "100%"};
  padding: ${({ mode }) =>
    mode === "box" ? "16px 20px 16px 20px" : mode === "labelIcon" && "0px 0px"};
  border-radius: ${({ mode }) => mode === "box" && "15px"};
  input {
    opacity: 0;
    visibility: hidden;
    width: 0;
  }
  .ColorBorder {
    position: absolute;
    width: 100%;
    background-color: transparent;
    height: 100%;
    left: 0;
    border-radius: 15px;
    border: 2px solid transparent;
    box-sizing: border-box;
  }
  input:disabled ~ .placeLabel {
    opacity: 0.5;
  }
  input:checked ~ .ColorBorder {
    border: ${({ theme }) => `2px solid ${theme.bgColor[5]}`};
  }
  input:checked ~ .placeLabel {
    background-color: ${({ theme, mode }) =>
      mode === "onlyLabel"
        ? theme.bgColor[5]
        : mode === "labelIcon" && theme.transparentColor[4]};
    //color: ${({ theme }) => theme.textColor[11]};
    border: ${({ theme, mode }) =>
      mode === "labelIcon" && `2px solid ${theme.borderColor[7]}`};
  }
  input:checked ~ .radioButton::after {
    transform: scale(1);
  }
  input:checked ~ .placeLabel {
    color: ${({ mode }) => mode !== "classic" && "white"};
  }
  .radioButton {
    display: ${({ mode }) =>
      mode === "onlyLabel" || mode === "labelIcon" ? "none" : "block"};
    border-radius: 50%;
    min-width: 16px;

    height: 16px;
    background-color: ${({ theme }) => theme.bgColor[2]};
    border: 1px solid ${({ theme }) => theme.borderColor[1]};
    margin-left: 4px;
    position: relative;
    &::after {
      transition: 0.2s all ease-in;

      transform: scale(0);
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.bgColor[5]};
    }
  }
  .placeLabel {
    width: 100%;
    border: ${({ theme, mode, borderSize }) =>
      typeof borderSize !== "undefined"
        ? `${borderSize}px`
        : mode === "onlyLabel" || mode === "labelIcon"
        ? `1px solid ${theme.borderColor[1]}`
        : `none`};
    border-radius: ${({ mode }) =>
      mode === "onlyLabel" ? "24px" : mode === "labelIcon" && "8px"};
    background-color: ${({ theme, bgColor }) =>
      typeof bgColor !== "undefined" && theme.bgColor[bgColor]};
    padding: ${({ mode }) =>
      mode === "onlyLabel" ? "4px 8px" : mode === "labelIcon" && "8px 26px"};
    font-size: ${({ mode }) => (mode === "onlyLabel" ? "14px" : "16px")};
  }
`;
