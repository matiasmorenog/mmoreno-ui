import type { Meta, StoryObj } from "@storybook/react-vite";
import { badgeVariants } from "../recipes/badge";
import { themeArgs, themeArgTypes } from "../stories/controls";
import { Badge } from "./badge";

const meta = {
  title: "Primitivos/Badge",
  component: Badge,
  args: {
    children: "Listo",
    variant: "default",
    ...themeArgs,
  },
  argTypes: {
    variant: { control: "select", options: [...badgeVariants] },
    ...themeArgTypes,
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BadgeStory: Story = {
  name: "Badge",
};
