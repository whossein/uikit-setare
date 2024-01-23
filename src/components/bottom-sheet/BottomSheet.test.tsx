import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import BottomSheet from "./BottomSheet";
import UikitProvider from "../uikit-provider";

describe("Running Test for BottomSheet Component", () => {
  test("Check BottomSheet Component", () => {
    render(
      <UikitProvider>
        <BottomSheet isOpen onClose={() => {}}>
            BottomSheet Component
        </BottomSheet>
      </UikitProvider>
    );
  });
});
