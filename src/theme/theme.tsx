"use client";

import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { themeStyle, type UiTheme } from "./tokens";

export function ThemeProvider({
  theme,
  className,
  children,
}: {
  theme?: UiTheme;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-ui-root=""
      style={themeStyle(theme)}
      className={cn("ui-canvas", className)}
    >
      {children}
    </div>
  );
}
