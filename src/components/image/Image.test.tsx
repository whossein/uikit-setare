import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Image from "./Image";
import UikitProvider from "../uikit-provider";

describe("Running Test for Image Component", () => {
  test("Check Image Component", () => {
    render(
      <UikitProvider>
        <Image
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Sample Image"
        />
      </UikitProvider>
    );
  });
});
