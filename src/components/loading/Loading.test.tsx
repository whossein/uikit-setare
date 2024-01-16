import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";
import UikitProvider from "../uikit-provider";

describe("Running Test for Loading Component", () => {
  test("Check Loading Component", () => {
    render(
      <UikitProvider>
        <Loading />
      </UikitProvider>
    );
  });
});
