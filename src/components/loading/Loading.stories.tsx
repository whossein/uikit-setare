import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "UiKit/Loading",
  // argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Primary: Story = (args) => <Loading {...args} />;
Primary.args = {};
