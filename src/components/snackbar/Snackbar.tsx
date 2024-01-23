import React, { useContext, useEffect, useLayoutEffect } from "react";
import { ISnackBar } from "./Snackbar.types";
import { motion, useAnimation } from "framer-motion";
import { parentDiv, SnackStyle } from "./Snackbar.style";
import { createPortal } from "react-dom";
import { SnackbarContext } from "./Snackbar.context";

export const useSnackBar = () => {
  const { setSnackbarItem } = useContext(SnackbarContext);
  return (param: ISnackBar) => {
    setSnackbarItem(param);
  };
};

const SnackbarItem = (props: ISnackBar) => {
  const { id, message, afterHide } = props;
  const { snackbarItem, fillSnackbarItem } = useContext(SnackbarContext);
  const controls = useAnimation();
  const variants = {
    show: { bottom: 48 + 10 },
    fadeOut: { bottom: -10 - 100 },
  };

  useEffect(() => {
    controls.start("show");
    setTimeout(() => {
      handleDelete(id);
    }, 4000);
  }, [controls]);

  const handleDelete = (id: number | undefined) => {
    controls.start("fadeOut").then(() => {
      let cashData: ISnackBar[] = JSON.parse(JSON.stringify(snackbarItem));

      let numberInput = id as number;

      if (numberInput > -1) {
        cashData.splice(numberInput, 1);
        fillSnackbarItem(cashData);
      }
      afterHide && afterHide();
    });
  };

  return (
    <motion.div
      onClick={() => {
        handleDelete(id);
      }}
      initial={"fadeOut"}
      style={parentDiv}
      animate={controls}
      variants={variants}
    >
      <SnackStyle>{message}</SnackStyle>
    </motion.div>
  );
};

export const SnackBarContainer = () => {
  //create parent div for show
  const wrapperTagname = "ui-kit-snackbar";

  useLayoutEffect(() => {
    if (!document.querySelector("#" + wrapperTagname)) {
      let domBottomSheet = document.createElement("div");
      domBottomSheet.setAttribute("id", wrapperTagname);
      document.querySelector("body")?.append(domBottomSheet);
    }
    return () => {
      // document.querySelector("#" + wrapperTagname)?.remove();
    };
  }, []);
  const { snackbarItem } = useContext(SnackbarContext);
  if (document.getElementById(wrapperTagname)) {
    return createPortal(
      <>
        {snackbarItem.length > 0 &&
          snackbarItem.map((item: ISnackBar, index: number) => (
            <SnackbarItem
              key={index}
              id={index}
              message={item.message}
              afterHide={item.afterHide}
            />
          ))}
      </>,
      document.getElementById(wrapperTagname) as HTMLElement
    );
  } else {
    return <></>;
  }
};

export default useSnackBar;
