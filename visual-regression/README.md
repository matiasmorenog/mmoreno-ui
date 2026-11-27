# Regresión visual

Herramientas previstas: Playwright y el test-runner de Storybook. No usamos Chromatic.

Este corte no trae snapshots. La comparación before/after se captura en los PR de migración de cada consumidor.

## Qué hay hoy

- `playwright.visual.config.ts` apunta a Storybook en `http://127.0.0.1:6006` y guarda las imágenes futuras en `visual-regression/snapshots/`.
- `visual-regression/primitives.spec.ts` está salteado a propósito.
- `.storybook/test-runner.ts` deja el hook `postVisit` vacío.

## Cómo se va a usar

1. Levantar Storybook (`npm run storybook`).
2. En el PR de migración, sacar la captura de antes y la de después, con el mismo viewport.
3. Incluir un estado con `prefers-reduced-motion: reduce`.
4. Recién ahí, quitar el `test.skip` o completar `postVisit` con `page.screenshot`.

`npm run test:visual` y `npm run test:storybook` no corren en CI hasta que esas líneas de base existan. CI cubre lint, tipos, Vitest, build del paquete y build de Storybook.
