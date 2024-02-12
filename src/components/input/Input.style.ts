import { css, styled } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IInputStyle } from "./Input.types";

export const InputWrapperStyle = styled(BaseStyles)<IInputStyle>`
  min-width: 260px;

  ${({ position }) => css`
    position: ${position ? position : "relative"};
  `}

  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        border-color: ${theme.borderColor[2]}!important;
        color: ${({ theme }) => theme?.textColor[3]}!important;

        .morph-input-holder,
        .morph-input {
          color: ${({ theme }) => theme?.textColor[3]}!important;
        }
      `;
    }

    return null;
  }}

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
        max-width: 100%;
      `;
    }

    return null;
  }}

  .morph-input-wrapper {
    /* height: 48px; */
    width: 100%;

    .morph-input-holder {
      position: relative;
      height: 100%;
      width: 100%;

      .morph-input-placeholder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        padding: 12px 0;
        box-sizing: border-box;
        transition: 0.2s all;
        color: ${({ theme }) => theme?.textColor[3]};
      }
    }

    .morph-input-end-icon {
      margin-right: 8px;
    }
    .morph-input-start-icon {
      margin-left: 8px;
    }
  }

  &.morph-input-is-focused {
    .morph-input-holder {
      .morph-input-placeholder {
        font-size: 10px;
        width: auto;
        height: auto;
        padding: 0;
        top: -10px;
        transition: 0.2s all;
        /* background-color: ${({ theme }) => theme?.bgColor[1]}; */
        color: ${({ theme }) => theme?.textColor[1]};
        padding: 0 8px;
        right: ${({ $hasStartIcon }) => ($hasStartIcon ? "-33px" : "-10px")};
      }
    }
  }

  .morph-input-helper {
    position: absolute;
    margin-top: 4px;
    .morph-input-helper-icon {
    }

    .morph-input-helper-text {
    }
  }
`;

export const InputStyle = styled.input<{
  textAlign?: string;
}>`
  border: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme?.textColor[1]};
  min-height: 44px;
  max-width: 100%;
  max-height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.textColor[3]};
    text-align: right;
  }

  text-align: ${({ textAlign }) => (textAlign ? textAlign : "unset")};
`;
