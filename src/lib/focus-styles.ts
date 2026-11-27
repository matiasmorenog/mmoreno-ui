/** Anillo de foco con teclado. El color, el grosor y el offset salen de tokens. */
export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-[length:var(--ui-focus-width,2px)] focus-visible:ring-[var(--ui-color-focus)] focus-visible:ring-offset-[length:var(--ui-focus-offset,2px)]";

/** Mismo anillo, también con puntero (`:focus`). */
export const FOCUS_RING_POINTER =
  "focus:outline-none focus:ring-[length:var(--ui-focus-width,2px)] focus:ring-[var(--ui-color-focus)] focus:ring-offset-[length:var(--ui-focus-offset,2px)]";
