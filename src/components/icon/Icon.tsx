import { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "styled-components";
import { IIconProps } from "./Icon.types";
import { IconWrapper } from "./Icon.style";
import React from "react";

const Icon = (props: IIconProps) => {
  const theme = useTheme();
  const {
    size = 25,
    type,
    // theme: themeProps,
    className = "",
    loadSvg = false,
    isFixBottom,
    fillPadding,
    ...other
  } = props;
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [svgHtml, setSvgHtml] = useState<string>("");

  let path = theme.isDark ? "dark" : "light";
  // if (themeProps) {
  //   path = themeProps;
  // } else {
  //   path = theme.isDark ? "dark" : "light";
  // }

  useLayoutEffect(() => {
    if (path)
      import(`./icons/${path}/${type}.svg`)
        .then((icon) => setImageSrc(icon.default))
        .catch((e) => {
          console.log("error", e);
        });
  }, [type, path]);

  useEffect(() => {
    if (imageSrc && loadSvg) {
      setSvgHtml("");
      fetch(imageSrc)
        .then((res) => res.text())
        .then((res) => setSvgHtml(res));
    }
  }, [imageSrc, loadSvg]);

  if (imageSrc) {
    return (
      <IconWrapper
        width={size}
        as="div"
        className={`morph-icon ${className}`}
        {...other}
      >
        {loadSvg ? (
          <div
            className="d-flex"
            dangerouslySetInnerHTML={{ __html: svgHtml }}
          />
        ) : (
          <img src={imageSrc} alt={type} />
        )}
      </IconWrapper>
    );
  }

  return <small>...</small>;
};
export default Icon;
