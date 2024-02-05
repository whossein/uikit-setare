import React, { forwardRef, useEffect, useRef, useState } from "react";
import Flex from "../flex";
import Text from "../text";
import { InputStyle, InputWrapperStyle } from "./Input.style";
import { IInput, TPureInput } from "./Input.types";
import { IBorderColor, ITextColor } from "../../types";
import {
  hasNumber,
  validateEmail,
  isMobile,
  justPersianLetter,
  removeNonNumeric,
} from "../../utils/Helpers";
import { addCommas, digitsFaToEn } from "@persian-tools/persian-tools";
import Icon from "../icon";

const Input = forwardRef((props: IInput & TPureInput, ref: any) => {
  const {
    className = "",
    placeholder,
    label,
    disabled = false,
    readOnly = false,
    type = "text",
    value,
    startIcon,
    endIcon,
    shrink = false,
    autoFocus = false,
    helpText,
    helpTextColor = "Info",
    helpIcon = "none",
    helpTextShow = true,
    showLimitChar = false,
    maxLength,
    isError = false,
    onInputChange,
    onChange,
    multiline = false,
    fullWidth = false,
    hasSeparatedNumber = false,
    validation = "none",
    notEntryOnError = false,
    bgColor = 1,
    direction = "rtl",
    inputMode = "text",
    onEnter,
    name,
    onBlur,
    onFocus,
    onKeyDown,
    onPaste,
    padding,
    textAlign,
    autoComplete,
    borderRadius = 16,
    ...otherProps
  } = props;

  const [errorState, setErrorState] = useState<{
    active: boolean;
    message: string | null;
  }>({
    active: false,
    message: "",
  });
  const [valueText, setValueText] = useState<string>(value || "");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultRef = useRef(null);
  const currentRef = ref ? ref : defaultRef;
  ref = inputRef;

  function handleFocus(e: any) {
    if (onFocus) {
      onFocus(e);
    }
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    if (onBlur) {
      onBlur(e);
    }
    setIsFocused(false);
    currentRef?.current?.blur();
  }

  const renderHelpIcon = () => {
    switch (helpIcon) {
      case "Error":
        return <Icon type="Error" loadSvg />;
      case "Info":
        return <Icon type="Neutral" loadSvg />;
      case "Success":
        return <Icon type="Yes" loadSvg />;
    }

    if (errorState.active) {
      return <Icon type="Error" loadSvg />;
    }

    return <></>;
  };

  const handleHelpTextColor = (): keyof ITextColor => {
    let c = helpTextColor || helpIcon;

    if (errorState.active) {
      c = "Error";
    }

    switch (c) {
      case "Error":
        return 10;
      case "Info":
        return 3;
      case "Success":
        return 9;
      default:
        return 1;
    }
  };

  const handleBorderColor = (): keyof IBorderColor => {
    if ((helpText && helpIcon === "Error") || isError) {
      return 6;
    } else if (isFocused) {
      return 1;
    }
    return 2;
  };

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e?.target?.value;
    let validateError = false;

    if (maxLength && val.length >= maxLength + 1) {
      setErrorState({
        active: true,
        message: "تعداد کاراکتر محدود است",
      });

      validateError = true;
    }

    if (validation === "onlyText" && val.length > 0 && hasNumber(val)) {
      setErrorState({
        active: true,
        message: "فقط از کاراکتر استفاده کنید",
      });

      validateError = true;
    }

    if (
      validation === "onlyPersianText" &&
      val.length > 0 &&
      !justPersianLetter(val)
    ) {
      setErrorState({
        active: true,
        message: "فقط از کاراکتر فارسی استفاده کنید",
      });

      validateError = true;
    }

    if (validation === "isEmail" && val.length > 0 && !validateEmail(val)) {
      setErrorState({
        active: true,
        message: "ایمیل را بصورت صحیح وارد نمائید",
      });

      validateError = true;
    }

    if (validation === "isMobile" && !isMobile(val)) {
      setErrorState({
        active: true,
        message: "شماره موبایل را بصورت صحیح وارد نمائید",
      });

      validateError = true;
    }

    if ((validation !== "none" || maxLength) && !validateError) {
      setErrorState({
        active: false,
        message: "",
      });
    }

    if (notEntryOnError && validateError) {
      e.preventDefault();
      return;
    }

    if (onChange instanceof Function) {
      onChange(e);
    }

    if (onInputChange instanceof Function) {
      onInputChange(
        hasSeparatedNumber ? removeNonNumeric(digitsFaToEn(val)) : val,
        validateError,
        e
      );
    }
    setValueText(val);
  }

  const isFocusedMode =
    isFocused || Boolean(valueText) || shrink || placeholder;
  const inputValue = value;
  const inputValueLength = inputValue ? inputValue?.length : 0;

  useEffect(() => {
    if (props.value) {
      setIsFocused(true);
    }
  }, [props.value]);

  return (
    <InputWrapperStyle
      component="div"
      className={`morph-input ${
        isFocusedMode ? "morph-input-is-focused" : ""
      } ${className}`}
      margin={"5px 0px"}
      onClick={handleFocus}
      textColor={3}
      disabled={disabled || readOnly}
      $hasStartIcon={!!startIcon}
      fullWidth={fullWidth}
      bgColor={bgColor}
      borderRadius={borderRadius}
      {...otherProps}
    >
      <Flex
        className="morph-input-wrapper"
        justifyContent="space-between"
        borderColor={handleBorderColor()}
        borderRadius={borderRadius}
        padding={padding ? padding : "0px 20px"}
        height={otherProps.height}
      >
        {startIcon && (
          <div className={"morph-input-start-icon morph-input-start-end"}>
            {" "}
            {startIcon}{" "}
          </div>
        )}
        <div className={"morph-input-holder"}>
          <InputStyle
            as={multiline ? "textarea" : "input"}
            autoComplete={autoComplete ? autoComplete : "off"}
            className={`morph-input-inner`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={currentRef}
            placeholder={(!isFocusedMode ? "" : placeholder) as string}
            disabled={disabled}
            readOnly={disabled}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (onKeyDown) {
                onKeyDown(e);
              }
              if (disabled || readOnly) {
                e.preventDefault();
                return;
              }
              if (e.key === "Enter" && onEnter instanceof Function) {
                onEnter(value, errorState.active, e);
              }
            }}
            type={type === "number" ? "tel" : type}
            pattern={
              Boolean(type === "tel" || type === "number")
                ? "[0-9]*"
                : undefined
            }
            value={hasSeparatedNumber ? addCommas(value!) : value}
            autoFocus={autoFocus}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleOnChange(e)
            }
            dir={direction}
            inputMode={
              type === "number" || type === "tel" ? "numeric" : inputMode
            }
            name={name}
            onPaste={onPaste}
            maxLength={maxLength}
            textAlign={textAlign}
          />
          {label && (
            <Text
              component="label"
              variant="caption1"
              className="morph-input-placeholder"
              bgColor={bgColor}
            >
              {label}
            </Text>
          )}
        </div>
        {endIcon && (
          <div className={"morph-input-end-icon morph-input-start-end"}>
            {" "}
            {endIcon}{" "}
          </div>
        )}
      </Flex>

      <Flex
        justifyContent={helpTextShow ? "flex-start" : "flex-end"}
        className="morph-input-helper"
        width={"100%"}
      >
        {!notEntryOnError && helpTextShow && (
          <Flex flex={1} justifyContent="flex-start">
            <Flex className="morph-input-helper-icon" ml={4}>
              {renderHelpIcon()}
            </Flex>
            <Text
              variant="caption1"
              fontSize={12}
              className="morph-input-helper-text"
              fontWeight="bold"
              textColor={handleHelpTextColor()}
              whiteSpace="normal"
            >
              {errorState.active ? errorState.message : helpText}
            </Text>
          </Flex>
        )}
        {Boolean(showLimitChar && maxLength) && (
          <Flex justifyContent="flex-end" width={"100%"}>
            <Text variant="caption1" fontWeight="bold">
              {inputValueLength}/{maxLength}{" "}
            </Text>
          </Flex>
        )}
      </Flex>
    </InputWrapperStyle>
  );
});

export default Input;
