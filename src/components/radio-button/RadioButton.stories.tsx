import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: "UiKit/RadioButton",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = (args) => <RadioButton {...args} />;
Primary.args = {
  label: "label"
};
