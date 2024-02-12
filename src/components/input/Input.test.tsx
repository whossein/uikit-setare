import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";
import UikitProvider from "../uikit-provider";

describe("Running Test for Input Component", () => {
  test("Check Input Component", () => {
    render(
      <UikitProvider>
        <Input label="test" />
      </UikitProvider>
    );
  });
});
