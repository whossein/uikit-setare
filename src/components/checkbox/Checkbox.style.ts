import styled from "styled-components";
import { ICheckbox } from "./Checkbox.type";
import { BaseStyles } from "../base/Base.styles";

/* 
attrs(
  (props: ICheckBoxContainer) => ({
    hasTick: props.hasTick,
    mode: props.mode,
    disabled: props.disabled,
  })
)

*/

export const CheckBoxContainer = styled(BaseStyles)<
  Partial<ICheckbox & { $hasTick?: boolean }>
>`
  display: flex;
  font-size: 14px;
  font-weight: 100;
  align-items: center;
  max-width: ${({ mode }) => (mode === "box" ? "inherit" : "fit-content")};
  position: relative;

  .checkboxItem {
    display: ${({ mode }) => (mode === "box" ? "none" : "block")};

    height: 16px;
    width: 16px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bgColor[2]};
    border: 1px solid ${({ theme }) => theme.borderColor[1]};
    margin: 0 4px;
  }
  .check {
    display: ${({ mode }) => (mode === "box" ? "none" : "block")};

    position: absolute;
    right: 6px;
    height: 12px;
    width: 12px;
    border-radius: 2px;
    background-color: transparent;

    &::after {
      display: ${({ $hasTick }) => ($hasTick ? "block" : "none")};
      transition: all 0.1s ease-in;
      content: "";
      position: absolute;
      left: 3px;
      top: 0px;
      width: 4px;
      height: 7px;
      border: solid white;
      border-width: 0px 2px 2px 0;
      transform: rotate(45deg) scale(0);
    }
  }
  .label {
    width: ${({ mode }) => mode === "box" && "100%"};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    border: 3px solid transparent;
    border-radius: ${({ mode }) => mode === "box" && "12px"};
  }
  input {
    &:checked ~ .label {
      border: ${({ theme, mode }) =>
        mode === "box" && `3px solid ${theme.borderColor[4]}`};
    }
    &:checked ~ .check {
      background-color: ${({ theme }) => theme.bgColor[5]};
      &::after {
        transform: rotate(45deg) scale(1);
      }
    }
    height: 0;
    width: 0;
    display: none;
  }
`;