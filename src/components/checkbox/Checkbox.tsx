import React from "react";
import { CheckBoxContainer } from "./Checkbox.style";
import { ICheckbox } from "./Checkbox.type";
import Base from "../base";

const Checkbox = (props: ICheckbox) => {
  const {
    label,
    onCheckBoxClick,
    onClick,
    showTick = false,
    margin,
    padding,
    mode = "classic",
    width,
    disabled = false,
  } = props;

  return (
    <Base margin={margin} padding={padding} width={width}>
      <CheckBoxContainer
        disabled={disabled}
        mode={mode}
        onClick={onClick}
        $hasTick={showTick}
        component={"label"}
        // {...props}
      >
        <input type="checkbox" {...props} onClick={onCheckBoxClick} />
        {/* <div className="check-wrapper"> */}
        <div className="checkboxItem" />
        <div className="check" />
        {/* </div> */}
        {label ? <Base className="label">{label}</Base> : null}
      </CheckBoxContainer>
    </Base>
  );
};
export default Checkbox;
