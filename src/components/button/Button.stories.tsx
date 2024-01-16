import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UiKit/Button",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
  children: "label",
};

export const Green: Story = (args) => <Button {...args} />;
Green.args = {
  children: "label",
  colorType: "green",
};

export const Orange: Story = (args) => <Button {...args} />;
Orange.args = {
  children: "label",
  colorType: "orange",
};

export const Outlined: Story = (args) => <Button {...args} />;
Outlined.args = {
  children: "label",
  variant: "outlined",
};

export const TextVariant: Story = (args) => <Button {...args} />;
TextVariant.args = {
  children: "label",
  variant: "text",
};

export const XLarge: Story = (args) => <Button {...args} />;
XLarge.args = {
  children: "label",
  size: "xlarge",
};

export const Large: Story = (args) => <Button {...args} />;
Large.args = {
  children: "label",
  size: "large",
};

export const Medium: Story = (args) => <Button {...args} />;
Medium.args = {
  children: "label",
  size: "medium",
};

export const Small: Story = (args) => <Button {...args} />;
Small.args = {
  children: "label",
  size: "small",
};

export const XSmall: Story = (args) => <Button {...args} />;
XSmall.args = {
  children: "label",
  size: "xsmall",
};

// start icon
// export const StartIcon: Story = (args) => <Button {...args} />;
// StartIcon.args = {
//   children: "label",
//   startIcon: <Icon/>
// };

// end icon
// export const EndIcon: Story = (args) => <Button {...args} />;
// EndIcon.args = {
//   children: "label",
//   size: "xsmall",
// };

export const Disabled: Story = (args) => <Button {...args} />;
Disabled.args = {
  children: "label",
  disabled: true,
};

export const Loading: Story = (args) => <Button {...args} />;
Loading.args = {
  children: "label",
  loading: 1,
};
