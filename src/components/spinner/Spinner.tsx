import { useContext } from "react";
import Lottie from "lottie-react";
import { ThemeContext } from "styled-components";
import defaultAnimation from "./button.loader.json";
import darkAnimation from "./dark.loader.json";
import lightAnimation from "./light.loader.json";
import React from "react";

const Spinner = ({ useDefaultAnimationData = false }) => {
  const theme = useContext(ThemeContext);
  const defaultOptions = {
    autoplay: true,
    animationData: useDefaultAnimationData
      ? defaultAnimation
      : theme?.isDark
      ? darkAnimation
      : lightAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie animationData={defaultOptions.animationData} loop />;
};

export default Spinner;
