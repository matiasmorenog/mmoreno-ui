import type { Meta, StoryObj } from "@storybook/react-vite";
import { themeArgs, themeArgTypes } from "../stories/controls";
import { Label } from "./label";

const meta = {
  title: "Primitivos/Label",
  component: Label,
  args: {
    children: "Nombre",
    ...themeArgs,
  },
  argTypes: themeArgTypes,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
  name: "Label",
};
