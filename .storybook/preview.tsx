import type { Decorator, Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/theme/theme";
import { themeKeys, type UiTheme } from "../src/theme/tokens";
import "./preview.css";

function themeFromArgs(args: Record<string, unknown>): UiTheme {
  const theme: UiTheme = {};
  for (const key of themeKeys) {
    const value = args[key];
    if (typeof value === "string" && value.length > 0) theme[key] = value;
  }
  return theme;
}

const withTheme: Decorator = (Story, context) => (
  <ThemeProvider
    theme={themeFromArgs(context.args as Record<string, unknown>)}
    className="min-w-80 p-6"
  >
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  decorators: [withTheme],
};

export default preview;
