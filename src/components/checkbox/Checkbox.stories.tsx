import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import Text from "../text";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UiKit/Checkbox",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Box: Story = (args) => <Checkbox {...args} />;
Box.args = {
  label: (
    <Text width="100%" variant="body" fontWeight="regular">
      label
    </Text>
  ),
  mode: "box",
};

export const Classic: Story = (args) => <Checkbox {...args} />;
Classic.args = {
  label: (
    <Text width="100%" variant="body" fontWeight="regular">
      label
    </Text>
  ),
  mode: "classic",
};
