import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import Flex from "../flex";
import { IconList } from "./Icon.types";
import Base from "../base";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "UiKit/Icon",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = (args) => <Icon {...args} />;
Primary.args = {
  type: "Big-Yes",
  size: 32,
  loadSvg: true,
  color: "red",
};

export const AllIcons: Story = (args) => (
  <>
    <Base
      component={"div"}
      style={{
        flexWrap: "wrap",
        display: "inline-flex",
        gap: 60,
      }}
      bgColor={1}
    >
      {IconList &&
        IconList.map((type) => {
          return (
            <Flex flexDirection="column" width={100} height={100}>
              <Icon {...args} type={type} mb={8} />
              <div
                style={{
                  textWrap: "nowrap",
                }}
              >
                {" "}
                {type}{" "}
              </div>
            </Flex>
          );
        })}
    </Base>
  </>
);
AllIcons.args = {
  size: 32,
  loadSvg: true,
  // color: "red",
};
