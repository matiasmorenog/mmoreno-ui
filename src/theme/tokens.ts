import type { CSSProperties } from "react";

/** Tema genérico. Cada consumidor pisa estos tokens; el catálogo usa valores neutros. */
export type UiTheme = {
  primary?: string;
  onPrimary?: string;
  soft?: string;
  surface?: string;
  foreground?: string;
  border?: string;
  focus?: string;
  danger?: string;
  dangerSoft?: string;
  radius?: string;
  elevation?: string;
  weight?: string;
  duration?: string;
  easing?: string;
  hover?: string;
  press?: string;
  focusWidth?: string;
  focusOffset?: string;
  switchWidth?: string;
  switchHeight?: string;
  switchThumb?: string;
  switchTravel?: string;
};

export const themeKeys = [
  "primary",
  "onPrimary",
  "soft",
  "surface",
  "foreground",
  "border",
  "focus",
  "danger",
  "dangerSoft",
  "radius",
  "elevation",
  "weight",
  "duration",
  "easing",
  "hover",
  "press",
  "focusWidth",
  "focusOffset",
  "switchWidth",
  "switchHeight",
  "switchThumb",
  "switchTravel",
] as const satisfies readonly (keyof UiTheme)[];

const cssVar: Record<keyof UiTheme, string> = {
  primary: "--ui-color-primary",
  onPrimary: "--ui-color-on-primary",
  soft: "--ui-color-soft",
  surface: "--ui-color-surface",
  foreground: "--ui-color-foreground",
  border: "--ui-color-border",
  focus: "--ui-color-focus",
  danger: "--ui-color-danger",
  dangerSoft: "--ui-color-danger-soft",
  radius: "--ui-radius",
  elevation: "--ui-shadow",
  weight: "--ui-weight",
  duration: "--ui-duration",
  easing: "--ui-ease",
  hover: "--ui-hover",
  press: "--ui-press",
  focusWidth: "--ui-focus-width",
  focusOffset: "--ui-focus-offset",
  switchWidth: "--ui-switch-width",
  switchHeight: "--ui-switch-height",
  switchThumb: "--ui-switch-thumb",
  switchTravel: "--ui-switch-travel",
};

/** Valores de ejemplo del catálogo. No son la paleta de ninguna app. */
export const exampleTheme: Required<UiTheme> = {
  primary: "#3d5a80",
  onPrimary: "#ffffff",
  soft: "#e7eef5",
  surface: "#ffffff",
  foreground: "#1c2430",
  border: "#c5ced8",
  focus: "#3d5a80",
  danger: "#b42318",
  dangerSoft: "#fdecea",
  radius: "0.5rem",
  elevation: "0 1px 2px rgb(0 0 0 / 0.08)",
  weight: "500",
  duration: "150ms",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  hover: "0.96",
  press: "0.9",
  focusWidth: "2px",
  focusOffset: "2px",
  switchWidth: "2.5rem",
  switchHeight: "1.375rem",
  switchThumb: "1.125rem",
  switchTravel: "1.125rem",
};

export function themeStyle(theme?: UiTheme): CSSProperties {
  if (!theme) return {};
  const style: Record<string, string> = {};
  for (const key of themeKeys) {
    const value = theme[key];
    if (value) style[cssVar[key]] = value;
  }
  return style;
}

export function splitThemeProps<T extends object>(props: T): {
  theme: UiTheme;
  rest: Omit<T, keyof UiTheme>;
} {
  const theme: UiTheme = {};
  const rest: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if ((themeKeys as readonly string[]).includes(key)) {
      if (typeof value === "string") theme[key as keyof UiTheme] = value;
    } else {
      rest[key] = value;
    }
  }
  return { theme, rest: rest as Omit<T, keyof UiTheme> };
}
