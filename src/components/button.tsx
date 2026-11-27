"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { FOCUS_RING } from "../lib/focus-styles";
import {
  buttonBase,
  buttonSizeClass,
  buttonVariantClass,
  type ButtonSize,
  type ButtonVariant,
} from "../recipes/button";
import { splitThemeProps, themeStyle, type UiTheme } from "../theme/tokens";

export type { ButtonSize, ButtonVariant };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  UiTheme & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** `false` deja el outline del navegador. */
    focusRing?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(all, ref) {
    const { theme, rest } = splitThemeProps(all);
    const {
      className,
      variant = "primary",
      size = "md",
      type,
      style,
      focusRing = true,
      ...dom
    } = rest;

    return (
      <button
        {...dom}
        ref={ref}
        type={type}
        data-ui-root=""
        style={{ ...themeStyle(theme), ...style }}
        className={cn(
          buttonBase,
          focusRing && FOCUS_RING,
          buttonVariantClass[variant],
          buttonSizeClass[size],
          className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
