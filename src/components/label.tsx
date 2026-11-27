"use client";

import type { LabelHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { labelClass } from "../recipes/label";
import { splitThemeProps, themeStyle, type UiTheme } from "../theme/tokens";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & UiTheme;

export function Label(all: LabelProps) {
  const { theme, rest } = splitThemeProps(all);
  const { className, style, ...dom } = rest;

  return (
    <label
      {...dom}
      data-ui-root=""
      style={{ ...themeStyle(theme), ...style }}
      className={cn(labelClass, className)}
    />
  );
}
