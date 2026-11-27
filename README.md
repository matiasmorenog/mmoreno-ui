# @mmoreno/ui

Primitivos de interfaz. Un componente por concepto. El look sale de variables CSS y de props, no de una copia por consumidor.

El paquete no trae pantallas de negocio. Tailwind v4 lo trae quien lo usa.

## Requisitos

- React 19
- Tailwind CSS v4

## Instalación

```css
@import "tailwindcss";
@source "../node_modules/@mmoreno/ui/dist";
@import "@mmoreno/ui/theme.css";
```

```tsx
import { Button, ThemeProvider } from "@mmoreno/ui";

export function Ejemplo() {
  return (
    <ThemeProvider
      theme={{
        primary: "#3d5a80",
        radius: "0.5rem",
        elevation: "0 1px 2px rgb(0 0 0 / 0.08)",
        weight: "500",
        duration: "150ms",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Button type="button" variant="primary">
        Guardar
      </Button>
    </ThemeProvider>
  );
}
```

Cada consumidor define su config. Los tokens cubren color (`primary`, `soft`, `surface`, `border`, `focus`), radio, sombra, peso, duración y easing. `prefers-reduced-motion: reduce` anula la transición aunque la duración sea más larga.

Las mismas props se pueden pasar a un primitivo suelto (`<Button radius="999px" duration="240ms" />`).

`Button` no fuerza `type`. Dentro de un formulario el navegador lo manda como `submit`. Para una acción que no envía el form, pasá `type="button"`.

`cn`, `themeStyle` y `exampleTheme` también se importan desde `@mmoreno/ui/cn` sin `use client`.

## Primitivos

| Componente | Variantes | Tamaños |
| --- | --- | --- |
| `Button` | `primary`, `secondary`, `outline`, `destructive` | `sm`, `md`, `lg`, `icon`, `icon-sm` |
| `Input` | foco `keyboard` o `pointer` | alto fijo de 2.5rem |
| `Badge` | `default`, `success`, `warning`, `danger` | — |
| `Label` | — | — |
| `Switch` | medida por `--ui-switch-*` | — |

## Catálogo

Hay una story por componente. El panel de controles cambia color, forma, estilo y motion. Cada app guarda su config afuera del catálogo.

## Scripts

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run storybook
npm run build-storybook
```

## Regresión visual

Ver [visual-regression/README.md](visual-regression/README.md). Este corte no trae snapshots.

## Versión

Changesets está configurado con acceso público. La versión inicial es `0.1.0`. CI no publica a npm.
