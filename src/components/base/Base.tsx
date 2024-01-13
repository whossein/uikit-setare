import React from "react";
import { BaseStyles } from "./Base.styles";
import { BaseProps } from "./Base.types";

const Base: React.FC<BaseProps> = (props) => {
  const { children } = props;
  return <BaseStyles>{children}</BaseStyles>;
};

export default Base;
