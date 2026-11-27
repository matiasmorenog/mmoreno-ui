"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { switchInput, switchRoot, switchThumb } from "../recipes/switch";
import { splitThemeProps, themeStyle, type UiTheme } from "../theme/tokens";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> &
  UiTheme;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  all,
  ref,
) {
  const { theme, rest } = splitThemeProps(all);
  const { className, style, ...dom } = rest;

  return (
    <span data-ui-root="" style={{ ...themeStyle(theme), ...style }} className={switchRoot}>
      <input
        {...dom}
        ref={ref}
        type="checkbox"
        role="switch"
        className={cn(switchInput, className)}
      />
      <span className={switchThumb} aria-hidden />
    </span>
  );
});

Switch.displayName = "Switch";
