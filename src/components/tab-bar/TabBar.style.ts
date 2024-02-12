import { css, styled } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IItemsWrapper, IOuterInnerWrapperStyle } from "./TabBar.types";

export const OuterWrapper = styled(BaseStyles)<IOuterInnerWrapperStyle>`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.borderColor[2]};
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor[1]};
  display: ${({ labelTitle }) => (labelTitle ? "flex" : "block")};
  justify-content: space-between;
  align-items: center;
  padding-right: ${({ labelTitle }) => (labelTitle ? "20px" : "none")};
`;

export const InnerWrapper = styled.div<IOuterInnerWrapperStyle>`
  width: 100%;
  padding: 8px 0px;
  border-radius: 12px;
  position: relative;
  max-width: ${({ labelTitle }) => (labelTitle ? "200px" : "none")};
`;

export const Indicator = styled.span`
  position: absolute;
  top: 0;
  border-radius: 11px;
  border: ${({ theme }) => `1px solid ${theme.borderColor[7]}`};
  background-color: ${({ theme }) => theme.bgColor[6]};
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
`;

export const ItemsWrapper = styled.div<IItemsWrapper>`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  height: 100%;

  ${({ theme, showSeparator, separatorColor }) =>
    showSeparator &&
    css`
      ::before,
      ::after {
        content: "";
        position: absolute;
        top: 6px;
        width: 2px;
        height: 12px;
        background-color: ${separatorColor
          ? theme.borderColor[separatorColor]
          : theme.borderColor[2]};
      }

      ::before {
        left: -2px;
      }

      ::after {
        right: -2px;
      }
    `}

  div {
    z-index: 1;
  }
`;
