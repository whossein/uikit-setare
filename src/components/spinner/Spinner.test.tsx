import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";
import UikitProvider from "../uikit-provider";

describe("Running Test for Spinner Component", () => {
  test("Check Spinner Component", () => {
    render(
      <UikitProvider>
        <Spinner />
      </UikitProvider>
    );
  });
});
