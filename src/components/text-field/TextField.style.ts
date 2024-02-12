import styled from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { ITextFieldContainer } from "./TextField.types";

export const TextFieldContainer = styled(BaseStyles)<ITextFieldContainer>`
  height: auto;
  display: block;

  border-color: ${(props) => props.$hasError && props.theme.borderColor[6]};
  border-radius: 16px;
  position: relative;
  &.hover {
    .label {
      transform: translate(0px, -22px);
      font-size: 12px;
    }
    input {
      &::placeholder {
        visibility: visible;
      }
    }
  }

  .label {
    position: absolute;
    background-color: ${({ theme }) => theme.bgColor[1]};
    padding: 0px 6px;
    transition: all 0.08s ease-out;
    transform: translate(0px, -2px);

    // &.hasIcon {
    //   right: 46px;
    // }
  }
  .label {
    color: ${(props) =>
      props.$hasError ? props.theme.textColor[10] : props.theme.textColor[1]};
  }
  input[type="tel"],
  input[type="number"] {
    text-align: left;
    direction: ltr;
  }
  input,
  textarea {
    outline: none;
    width: 100%;
    border: 0;
    background-color: transparent;
    font-size: 14px;
    color: ${(props) => {
      return props.$hasError
        ? props.theme.textColor[10]
        : props.textColor
        ? props.theme.textColor[props.textColor]
        : props.theme.textColor[1];
    }};
    text-align: ${({ textAlign }) => textAlign || "right"};
    direction: ${({ textAlign }) => (textAlign === "left" ? "ltr" : "rtl")};
    :focus {
      outline: none;
    }
  }
`;
