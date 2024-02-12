import React, { HTMLAttributes, forwardRef, useRef, useState } from "react";
import Base from "../base";
import Text from "../text";
import Flex from "../flex";
import Icon from "../icon";
import { IBaseProps } from "../base/Base.types";
import { ITextField } from "./TextField.types";
import { TextFieldContainer } from "./TextField.style";

//in change event each unicode digit converted to ascii
const convertNumbers2English = (string: any) => {
  return string
    .replace(/[\u0660-\u0669]/g, (c: any) => {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(/[\u06f0-\u06f9]/g, function (c: any) {
      return c.charCodeAt(0) - 0x06f0;
    });
};

const TextField = forwardRef(
  (
    props:
      | (IBaseProps & ITextField & React.InputHTMLAttributes<HTMLInputElement>)
      | React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    forwardRef: any
  ) => {
    //html default properties
    const HTMLProps = props as HTMLAttributes<
      HTMLInputElement | HTMLTextAreaElement
    >;

    //uikit properties
    const BaseProps = props as IBaseProps;

    //TextFeild propeties
    const {
      label,
      shrink,
      fullWidth,
      multiline = false,
      startIcon,
      endIcon,
      helpText,
      helpTextType = "None",
      isError = false,
    } = props as ITextField;

    //this state used for animate TextFeild label
    const [hasShirink, setHasShirink] = useState<boolean>(
      props.value ? true : false
    );
    let refInput = useRef<any>(null);

    //text Feild events
    const onChangeEvent = (
      e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      e.stopPropagation();
      if (refInput.current.value) {
        setHasShirink(true);
      }
      let value = convertNumbers2English(e.currentTarget.value);
      let output = e.currentTarget;
      output.value = value;
      if (HTMLProps.onChange)
        HTMLProps.onChange({ ...e, currentTarget: output });
    };

    const onFocusEvent = (
      e: React.FocusEvent<HTMLInputElement> &
        React.FocusEvent<HTMLTextAreaElement>
    ) => {
      setHasShirink(true);
      if (refInput.current?.value) refInput.current.select();
      props.onFocus && props.onFocus(e);
    };

    const onBlurEvent = (
      e: React.FocusEvent<HTMLInputElement> &
        React.FocusEvent<HTMLTextAreaElement>
    ) => {
      if (refInput.current.value.length === 0) {
        setHasShirink(false);
      }
      props.onBlur && props.onBlur(e);
    };

    const onClickEvent = (
      e: React.MouseEvent<HTMLInputElement> &
        React.FocusEvent<HTMLTextAreaElement>
    ) => {
      setHasShirink(true);
      if (refInput.current.value) refInput.current.select();
      props.onClick && props.onClick(e);
    };

    return (
      <Base width={"100%"} {...BaseProps}>
        <TextFieldContainer
          width={fullWidth ? "100%" : BaseProps.width}
          $showTitle={label ? label.toString().length > 0 : false}
          $hasError={isError}
          $hasIcon={Boolean(startIcon) || Boolean(endIcon)}
          padding="12px 20px"
          className={
            shrink ||
            hasShirink ||
            props.value ||
            props.placeholder ||
            props.defaultValue
              ? `${BaseProps.className} label hover`
              : `${BaseProps.className} label`
          }
          textAlign={BaseProps.textAlign || "right"}
          textColor={BaseProps.textColor}
          borderSize={BaseProps.borderSize}
          borderColor={BaseProps.borderColor || 2}
          borderRadius={BaseProps.borderRadius || 16}
        >
          <Text
            onClick={() => {
              refInput.current && refInput.current.focus();
            }}
            className={startIcon ? "label hasIcon" : "label"}
            fontSize={14}
          >
            {label}
          </Text>
          {multiline ? (
            <textarea
              {...HTMLProps}
              onClick={onClickEvent}
              onFocus={onFocusEvent}
              onBlur={onBlurEvent}
              ref={(e) => {
                if (e) {
                  forwardRef && forwardRef(e);
                  refInput.current = e;
                }
              }}
              onChange={(e) => onChangeEvent(e)}
            ></textarea>
          ) : (
            <Flex>
              {startIcon && startIcon}
              <input
                {...HTMLProps}
                onClick={onClickEvent}
                onChange={onChangeEvent}
                onFocus={onFocusEvent}
                onBlur={onBlurEvent}
                ref={(e) => {
                  if (e) {
                    forwardRef && forwardRef(e);
                    refInput.current = e;
                  }
                }}
              />
              {endIcon && endIcon}
            </Flex>
          )}
        </TextFieldContainer>
        {helpText && (
          <>
            {helpTextType === "None" ? (
              helpText
            ) : (
              <Flex width={"100%"} justifyContent="flex-start" mt={4}>
                <Icon
                  type={
                    helpTextType === "Error"
                      ? "Error"
                      : helpTextType === "Success"
                      ? "Yes"
                      : "Neutral"
                  }
                  size={14}
                  margin="0px 0px 0px 4px"
                />
                <Text
                  fontSize={12}
                  textColor={
                    helpTextType === "Error"
                      ? 10
                      : helpTextType === "Success"
                      ? 9
                      : 3
                  }
                >
                  {helpText}
                </Text>
              </Flex>
            )}
          </>
        )}
      </Base>
    );
  }
);

export default TextField;
