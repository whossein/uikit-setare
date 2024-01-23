import styled, { CSSProperties } from "styled-components";

export const SnackStyle = styled.div`
  display: flex;
  padding: 12px 24px;
  width: 335px;
  height: auto;
  background-color: ${({ theme }) => theme.bgColor[2]};
  border-radius: 12px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textColor[1]};
  /* font-family: ${({ theme }) =>
    theme.autoSetLtrFontFamily ? "IranYekan" : "Roboto"}, 
    sans-serif;*/
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  word-break: break-word;
`;
export const parentDiv: CSSProperties = {
  position: "fixed",
  zIndex: "9999999",
  left: "50%",
  transform: "translateX(-50%)",
};
