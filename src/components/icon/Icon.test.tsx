import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Icon from "./Icon";
import UikitProvider from "../uikit-provider";

describe("Running Test for Icon Component", () => {
  test("Check Icon Component", () => {
    render(
      <UikitProvider>
        <Icon type="Add"></Icon>
      </UikitProvider>
    );
  });
});
