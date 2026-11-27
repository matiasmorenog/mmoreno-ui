import { FOCUS_RING, FOCUS_RING_POINTER } from "../lib/focus-styles";

export const inputClass = [
  "flex h-10 w-full rounded-[var(--ui-radius,0.5rem)] border border-[var(--ui-color-border)] bg-[var(--ui-color-surface)] px-3 py-0 text-sm leading-10 text-[var(--ui-color-foreground)]",
  "placeholder:text-[color-mix(in_srgb,var(--ui-color-foreground)_45%,transparent)]",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
].join(" ");

export const inputFocusClass = {
  keyboard: FOCUS_RING,
  pointer: FOCUS_RING_POINTER,
} as const;

export type FocusTrigger = keyof typeof inputFocusClass;
