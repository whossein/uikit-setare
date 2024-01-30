import React, { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import {
  ButtonContainer,
  DialogDiv,
  ModalContainer,
  ModalFullScreenStyle,
  ModalStyle,
} from "./Modal.style";
import Spinner from "../spinner";
import { IModal } from "./Modal.types";
import Icon from "../icon";

const Modal = (props: IModal) => {
  const { isOpen, title, children, buttons, iconType, fullScreen } = props;
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  const variants = {
    show: {
      transform: "translate(-50%,-50%) scale(1)",
      filter: "blur(0px)",
      opacity: 1,
    },
    fadeOut: {
      transform: "translate(-50%,-50%) scale(3)",
      filter: "blur(60px)",
      opacity: 0,
    },
    hide: {
      transform: "translate(-50%,-50%) scale(1)",
      filter: "blur(0px)",
      opacity: 0,
    },
  };

  const fullScreenVariants = {
    show: {
      transform: "translate(0,0) scale(1)",
      filter: "blur(0px)",
      opacity: 1,
    },
    fadeOut: {
      transform: "translate(0,0) scale(3)",
      filter: "blur(60px)",
      opacity: 0,
    },
    hide: {
      transform: "translate(0,0) scale(1)",
      filter: "blur(0px)",
      opacity: 0,
    },
  };

  //   useLayoutEffect(() => {
  //     if (!document.querySelector("#ui-kit-modal")) {
  //       let domModal = document.createElement("div");
  //       domModal.setAttribute("id", "ui-kit-modal");
  //       document.querySelector("body")?.append(domModal);
  //     }
  //     return () => {
  //       let element = document.querySelector("#root") as HTMLElement;
  //       element.style.filter = "";
  //       document.querySelector("#ui-kit-modal")?.remove();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     let element = document.querySelector("#root") as HTMLElement;

  //     if (visible) {
  //       controls.start("show");
  //       if (element) {
  //         element.style.filter = "blur(4px)";
  //       }
  //     } else {
  //       if (element) {
  //         element.style.filter = "";
  //       }
  //     }
  //   }, [visible, controls]);

  //   useEffect(() => {
  //     if (isOpen) {
  //       setVisible(true);
  //     } else {
  //       let element = document.querySelector("#root") as HTMLElement;
  //       element.style.filter = "";
  //       setVisible(false);
  //       controls.start("hide");
  //     }
  //   }, [isOpen, controls]);

  if (document.getElementById("ui-kit-modal")) {
    if (!visible) return <></>;
    else
      return createPortal(
        <ModalContainer>
          <motion.div
            style={fullScreen ? ModalFullScreenStyle : ModalStyle}
            initial={"fadeOut"}
            animate={controls}
            variants={fullScreen ? fullScreenVariants : variants}
          >
            <DialogDiv>
              {title && (
                <div className="header">
                  <div className="caption">{title}</div>
                  {iconType && (
                    <Icon
                      //    theme="dark"
                      type={iconType}
                      size={20}
                    />
                  )}
                </div>
              )}
              <div className="content">{children}</div>
              <ButtonContainer
                className={`${buttons && buttons.length > 2 && "stack"} ${
                  buttons && buttons.length === 1 && "single"
                }`}
              >
                {buttons?.map((item, index) => (
                  <div
                    key={item.title ? item.title : "" + index}
                    className="modal-box"
                  >
                    {item.isLoading ? (
                      <Spinner />
                    ) : (
                      <input
                        key={item.title}
                        type="button"
                        value={item.title ? item.title : ""}
                        onClick={item.onClick}
                      />
                    )}
                  </div>
                ))}
              </ButtonContainer>
            </DialogDiv>
          </motion.div>
        </ModalContainer>,
        document.getElementById("ui-kit-modal") as HTMLElement
      );
  } else {
    return <></>;
  }
};

export default Modal;
