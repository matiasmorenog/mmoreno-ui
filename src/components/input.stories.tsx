import type { Meta, StoryObj } from "@storybook/react-vite";
import { themeArgs, themeArgTypes } from "../stories/controls";
import { Input } from "./input";

const meta = {
  title: "Primitivos/Input",
  component: Input,
  args: {
    "aria-label": "Nombre",
    placeholder: "Texto",
    focusTrigger: "keyboard",
    ...themeArgs,
  },
  argTypes: {
    focusTrigger: { control: "inline-radio", options: ["keyboard", "pointer"] },
    ...themeArgTypes,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  name: "Input",
};
