import styled, { css } from "styled-components";

export const LoadingStyled = styled.div<{ size?: number }>`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 105;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    overflow: visible !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & svg {
    overflow: visible !important;
    ${({ size }) => {
      if (size) {
        return css`
          width: ${size}px !important;
          height: ${size}px !important;
        `;
      }
    }}
  }
`;
