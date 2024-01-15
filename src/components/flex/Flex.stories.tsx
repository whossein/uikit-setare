import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "UiKit/Flex",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Center: Story = (args) => <Flex {...args} />;
Center.args = {
  fullWidth: true,
  bgColor: 3,
  borderRadius: 12,
  children: (
    <>
      <div> 1 </div>
      <div> 2 </div>
      <div> 3 </div>
    </>
  ),
};

export const Around: Story = (args) => <Flex {...args} />;
Around.args = {
  fullWidth: true,
  bgColor: 3,
  borderRadius: 12,
  justifyContent: "space-around",
  children: (
    <>
      <div> 1 </div>
      <div> 2 </div>
      <div> 3 </div>
    </>
  ),
};
