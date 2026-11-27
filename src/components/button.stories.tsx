import type { Meta, StoryObj } from "@storybook/react-vite";
import { buttonSizes, buttonVariants } from "../recipes/button";
import { themeArgs, themeArgTypes } from "../stories/controls";
import { Button } from "./button";

const meta = {
  title: "Primitivos/Button",
  component: Button,
  args: {
    children: "Guardar",
    type: "button",
    variant: "primary",
    size: "md",
    ...themeArgs,
  },
  argTypes: {
    variant: { control: "select", options: [...buttonVariants] },
    size: { control: "select", options: [...buttonSizes] },
    ...themeArgTypes,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  name: "Button",
};
