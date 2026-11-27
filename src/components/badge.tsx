"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import {
  badgeBase,
  badgeVariantClass,
  type BadgeVariant,
} from "../recipes/badge";
import { splitThemeProps, themeStyle, type UiTheme } from "../theme/tokens";

export type { BadgeVariant };

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  UiTheme & {
    children: ReactNode;
    variant?: BadgeVariant;
  };

export function Badge(all: BadgeProps) {
  const { theme, rest } = splitThemeProps(all);
  const { children, variant = "default", className, style, ...dom } = rest;

  return (
    <span
      {...dom}
      data-ui-root=""
      style={{ ...themeStyle(theme), ...style }}
      className={cn(badgeBase, badgeVariantClass[variant], className)}
    >
      {children}
    </span>
  );
}
