export const badgeVariants = ["default", "success", "warning", "danger"] as const;

export type BadgeVariant = (typeof badgeVariants)[number];

export const badgeBase =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[var(--ui-weight,500)]";

export const badgeVariantClass: Record<BadgeVariant, string> = {
  default: "bg-[var(--ui-color-soft)] text-[var(--ui-color-foreground)]",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-[var(--ui-color-danger-soft)] text-[var(--ui-color-danger)]",
};
