"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { inputClass, inputFocusClass, type FocusTrigger } from "../recipes/input";
import { splitThemeProps, themeStyle, type UiTheme } from "../theme/tokens";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  UiTheme & {
    /** `pointer` pinta el anillo también con el mouse. */
    focusTrigger?: FocusTrigger;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  all,
  ref,
) {
  const { theme, rest } = splitThemeProps(all);
  const {
    className,
    type = "text",
    style,
    focusTrigger = "keyboard",
    ...dom
  } = rest;

  return (
    <input
      {...dom}
      ref={ref}
      type={type}
      data-ui-root=""
      style={{ ...themeStyle(theme), ...style }}
      className={cn(inputClass, inputFocusClass[focusTrigger], className)}
    />
  );
});

Input.displayName = "Input";
