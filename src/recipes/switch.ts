import { FOCUS_RING } from "../lib/focus-styles";

export const switchRoot =
  "ui-switch relative inline-flex shrink-0 items-center h-[var(--ui-switch-height,1.375rem)] w-[var(--ui-switch-width,2.5rem)]";

export const switchInput = [
  "peer absolute inset-0 cursor-pointer appearance-none rounded-full border border-[var(--ui-color-border)] bg-[color-mix(in_srgb,var(--ui-color-foreground)_12%,var(--ui-color-surface))] shadow-inner",
  "checked:border-[var(--ui-color-primary)] checked:bg-[var(--ui-color-primary)]",
  "enabled:hover:border-[color-mix(in_srgb,var(--ui-color-foreground)_28%,var(--ui-color-border))]",
  "disabled:cursor-not-allowed disabled:opacity-50",
  FOCUS_RING,
].join(" ");

export const switchThumb =
  "ui-switch-thumb pointer-events-none absolute left-0.5 top-1/2 size-[var(--ui-switch-thumb,1.125rem)] -translate-y-1/2 rounded-full bg-[var(--ui-color-surface)] shadow-sm peer-checked:translate-x-[var(--ui-switch-travel,1.125rem)] peer-disabled:opacity-50";
