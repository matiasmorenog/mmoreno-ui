import type { Meta, StoryObj } from "@storybook/react-vite";
import { themeArgs, themeArgTypes } from "../stories/controls";
import { Switch } from "./switch";

const meta = {
  title: "Primitivos/Switch",
  component: Switch,
  args: {
    "aria-label": "Activo",
    defaultChecked: true,
    ...themeArgs,
  },
  argTypes: themeArgTypes,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchStory: Story = {
  name: "Switch",
};
