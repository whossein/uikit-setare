import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import TabBar from "./TabBar";
import UikitProvider from "../uikit-provider";

describe("Running Test for TabBar Component", () => {
  test("Check TabBar Component", () => {
    render(
      <UikitProvider>
        <TabBar data={[{ value: "test", title: "test" }]} />
      </UikitProvider>
    );
  });
});
