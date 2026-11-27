import type { ArgTypes } from "@storybook/react-vite";
import { exampleTheme, themeKeys, type UiTheme } from "../theme/tokens";

const colorKeys = new Set<keyof UiTheme>([
  "primary",
  "onPrimary",
  "soft",
  "surface",
  "foreground",
  "border",
  "focus",
  "danger",
  "dangerSoft",
]);

const categories: Partial<Record<keyof UiTheme, string>> = {
  primary: "Color",
  onPrimary: "Color",
  soft: "Color",
  surface: "Color",
  foreground: "Color",
  border: "Color",
  focus: "Color",
  danger: "Color",
  dangerSoft: "Color",
  radius: "Forma",
  elevation: "Estilo",
  weight: "Estilo",
  hover: "Estilo",
  press: "Estilo",
  focusWidth: "Estilo",
  focusOffset: "Estilo",
  duration: "Motion",
  easing: "Motion",
  switchWidth: "Forma",
  switchHeight: "Forma",
  switchThumb: "Forma",
  switchTravel: "Forma",
};

export const themeArgs: Required<UiTheme> = { ...exampleTheme };

export const themeArgTypes: ArgTypes = Object.fromEntries(
  themeKeys.map((key) => [
    key,
    {
      control: colorKeys.has(key) ? "color" : "text",
      table: { category: categories[key] ?? "Tema" },
    },
  ]),
);
