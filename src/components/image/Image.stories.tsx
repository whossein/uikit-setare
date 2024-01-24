import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "UiKit/Image",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = (args) => <Image {...args} />;
Primary.args = {
  src: "https://picsum.photos/seed/picsum/400/300",
  width: "100%",
  height: "100%"
};
