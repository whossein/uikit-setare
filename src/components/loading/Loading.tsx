import React from "react";
import Spinner from "../spinner";
import { ILoadingProps } from "./Loading.types";
import { LoadingStyled } from "./loading.style";

function Loading(props: ILoadingProps) {
  const { size = 24, isWhite = false } = props;
  return (
    <LoadingStyled size={size}>
      <Spinner useDefaultAnimationData={isWhite} />
    </LoadingStyled>
  );
}

export default Loading;
