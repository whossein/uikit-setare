import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import Flex from "../flex/Flex";
import { TVariant } from "./Text.types";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "UiKit/Text",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Text>;

const variantArray: TVariant[] = [
  "body",
  "caption1",
  "caption2",
  "title1",
  "title2",
];
export const Variants: Story = (args) => (
  <Flex
    alignContent="flex-start"
    justifyContent="flex-start"
    flexDirection="column"
    gap={12}
  >
    {variantArray &&
      variantArray.map((i) => {
        return (
          <Flex>
            <Text variant={i} {...args}>
              {" "}
              {i}{" "}
            </Text>
          </Flex>
        );
      })}
  </Flex>
);
Variants.args = {
  // children: "label",
};
