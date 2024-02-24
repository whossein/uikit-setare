import React from "react";
import { IFlex } from "./Flex.types";
import Base from "../base";
import { FlexStyle } from "./Flex.style";

/**
 * base component for flex css display
 * @param IFlex
 */
const Flex = React.forwardRef((props: IFlex, ref: any) => {
  const {
    component = "div",
    loading = false,
    className = "",
    children,
    height,
    ...otherProps
  } = props;

  return (
    <FlexStyle
      loading={loading ? 1 : 0}
      as={component}
      ref={ref}
      height={height}
      {...otherProps}
      className={`morph-flex ${className}`}
    >
      {loading ? (
        <Base
          borderRadius={otherProps.borderRadius}
          width={"100vw"}
          minHeight={height}
        ></Base>
      ) : (
        children
      )}
    </FlexStyle>
  );
});

export default Flex;
