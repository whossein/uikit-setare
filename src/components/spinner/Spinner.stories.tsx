import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: "UiKit/Spinner",
  // argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = (args) => <Spinner {...args} />;
Primary.args = {};
