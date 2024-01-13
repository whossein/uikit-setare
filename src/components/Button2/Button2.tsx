import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button2.types";

const RootStyledButton = styled.button`
  cursor: pointer;
  /* padding: 0px ${(props) => props.theme.spacing.unit * 2}; */
  height: 49px;
  border-radius: 2px;
  border: 2px solid ${(props) => props.theme.palette.white};
  display: inline-flex;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.palette.secondary
      : props.theme.palette.primary};
`;

const ButtonSpan = styled.span`
  margin: auto;
  font-size: ${(props) => props.theme.typography.fontSizeButton};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  text-align: center;
  color: ${(props) => props.theme.palette.white};
  text-transform: uppercase;
`;

const Button2: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <RootStyledButton type="button" {...props}>
      <ButtonSpan> {children} </ButtonSpan>
    </RootStyledButton>
  );
};

export default Button2;
