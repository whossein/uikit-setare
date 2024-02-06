import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import Icon from "../icon";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "UiKit/TextField",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = (args) => <TextField {...args} />;
Primary.args = {
  label: "label",
  dir: "rtl",
  textAlign: "left",
};

export const StartIcon: Story = (args) => <TextField {...args} />;
StartIcon.args = {
  ...Primary.args,
  startIcon: <Icon type="Big-Yes" />,
};

export const EndIcon: Story = (args) => <TextField {...args} />;
EndIcon.args = {
  ...Primary.args,
  endIcon: <Icon type="Big-Yes" />,
};

export const ShrinkedTextField: Story = (args) => <TextField {...args} />;
ShrinkedTextField.args = {
  ...Primary.args,
  shrink: true,
};
