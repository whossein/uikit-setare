import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "styled-components";
import type { IBottomSheetProps, IPointerModel } from "./BottomSheet.type";
import {
  Children,
  Close,
  Header,
  Line,
  Stage,
  childStyle,
  parentStyle,
} from "./BottomSheet.style";
import Icon from "../icon";
import Text from "../text/Text";
import Base from "../base";

const BottomSheet = (props: IBottomSheetProps) => {
  const {
    isOpen,
    onClose,
    children,
    showClose = true,
    title,
    footer,
    fullScreen = false,
    headerStyle,
    bodyStyle,
  } = props;
  const controls = useAnimation();
  const controlsContainer = useAnimation();
  const innerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [init, setInit] = useState<boolean>(false);
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [headerH, setheaderH] = useState<number>(0);
  const theme = useTheme();
  const wrapperTagname = "ui-kit-bottom";

  useEffect(() => {
    setheaderH(document.querySelector("#headerBottomSheet")?.clientHeight || 0);
  }, [document.querySelector("#headerBottomSheet")?.clientHeight, init]);

  useEffect(() => {
    if (document.querySelector("#root") as HTMLElement) {
      if (isOpen) {
        let element = document.querySelector("#root") as HTMLElement;
        element.style.filter = "blur(3px)";
      } else {
        let element = document.querySelector("#root") as HTMLElement;
        element.style.filter = "blur(0px)";
      }
      return () => {
        let element = document.querySelector("#root") as HTMLElement;
        element.style.filter = "blur(0px)";
      };
    }
  }, [isOpen]);

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

  const fadeIn = useCallback(() => {
    navigator.vibrate && navigator.vibrate(200);
    controlsContainer.start({ opacity: 1, transition: { duration: 0.2 } });
    controls.start({ bottom: 0, transition: { duration: 0.3 } });
  }, [controls, controlsContainer]);

  const fadeOut = useCallback(() => {
    if (innerRef?.current?.clientHeight) {
      controls.start({
        bottom: -innerRef.current.clientHeight,
        transition: { duration: 0.2 },
      });
      controlsContainer
        .start({ opacity: 0, transition: { duration: 0.5 } })
        .then(() => setInit(false));
    }
  }, [controls, controlsContainer]);

  useEffect(() => {
    if (init) {
      fadeIn();
    }
  }, [init, fadeIn]);

  useEffect(() => {
    if (isOpen) {
      if (init === false) {
        setInit(true);
      } else {
        fadeIn();
      }
    } else {
      if (init) {
        fadeOut();
      }
    }
  }, [isOpen, fadeIn, fadeOut, init]);

  const onDragAction = (e: EventListener, info: IPointerModel) => {
    let bottomSizeHalf: number = innerRef?.current?.clientHeight
      ? innerRef.current.clientHeight / 2
      : 0;
    let fadeOutPoint: number = document.body.clientHeight - bottomSizeHalf;
    if (info.point.y > fadeOutPoint) {
      onClose();
    }
  };
  if (document.getElementById(wrapperTagname)) {
    return createPortal(
      init && (
        <motion.div
          onClick={() => {
            onClose();
          }}
          animate={controlsContainer}
          style={parentStyle}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            drag="y"
            animate={controls}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={{ top: 0, bottom: 1 }}
            onDrag={(e: any, info: IPointerModel) => {
              onDragAction(e, info);
            }}
            style={{
              ...childStyle,
              height: "100%",
              maxHeight: "100%",
            }}
          >
            <Stage
              onDrag={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="draggable"
              $isFullScreen={fullScreen}
              ref={innerRef}
            >
              <Header
                theme={theme}
                $isFullScreen={fullScreen}
                id="headerBottomSheet"
                ref={headerRef}
                {...headerStyle}
              >
                <Line theme={theme} />
                {showClose && (
                  <Close onClick={() => onClose()}>
                    <Icon type="Remove" size={20} />
                  </Close>
                )}
                {typeof title === "string" ? (
                  <Text fontSize={12} mt={16}>
                    {title}
                  </Text>
                ) : (
                  <Base width={"100%"} mt={16}>
                    {title}
                  </Base>
                )}
              </Header>
              <Children
                $isFullScreen={fullScreen}
                bgColor={1}
                className="children"
                $headerHeight={headerH || 80}
                $footerHeight={footer ? 60 : 0}
                onPointerMove={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                {...bodyStyle}
              >
                {children}
              </Children>
              {footer && <Base className="footer">{footer}</Base>}
            </Stage>
          </motion.div>
        </motion.div>
      ),
      document.getElementById(wrapperTagname) as HTMLElement
    );
  } else {
    return <></>;
  }
};

export default BottomSheet;
