export const buttonVariants = [
  "primary",
  "secondary",
  "outline",
  "destructive",
] as const;

export const buttonSizes = ["sm", "md", "lg", "icon", "icon-sm"] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];

export const buttonBase = [
  "inline-flex cursor-pointer items-center justify-center border border-transparent",
  "rounded-[var(--ui-radius,0.5rem)] font-[var(--ui-weight,500)]",
  "shadow-[var(--ui-shadow,none)]",
  "hover:brightness-[var(--ui-hover,0.96)] active:brightness-[var(--ui-press,0.9)]",
  "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
].join(" ");

export const buttonVariantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--ui-color-primary)] text-[var(--ui-color-on-primary)]",
  secondary:
    "border-[var(--ui-color-primary)] bg-transparent text-[var(--ui-color-primary)] hover:bg-[var(--ui-color-soft)]",
  outline:
    "border-[var(--ui-color-border)] bg-[var(--ui-color-surface)] text-[var(--ui-color-foreground)] hover:bg-[var(--ui-color-soft)]",
  destructive:
    "border-[var(--ui-color-danger)] bg-[var(--ui-color-surface)] text-[var(--ui-color-danger)] hover:bg-[var(--ui-color-danger-soft)]",
};

export const buttonSizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 shrink-0 p-0",
  "icon-sm": "h-8 w-8 shrink-0 p-0",
};
