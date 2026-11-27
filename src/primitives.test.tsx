import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { Switch } from "./components/switch";
import { ThemeProvider } from "./theme/theme";

function classes(element: Element): string[] {
  return element.className.split(/\s+/).filter(Boolean);
}

describe("Button", () => {
  it("pinta la variante y el tamaño, y no filtra los tokens al DOM", () => {
    render(
      <Button primary="#3d5a80" radius="999px" duration="240ms" weight="600">
        Guardar
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button).toHaveAttribute("data-ui-root", "");
    expect(button).not.toHaveAttribute("primary");
    expect(button).toHaveStyle({
      "--ui-color-primary": "#3d5a80",
      "--ui-radius": "999px",
      "--ui-duration": "240ms",
      "--ui-weight": "600",
    });
    const list = classes(button);
    expect(list).toEqual(
      expect.arrayContaining([
        "h-10",
        "px-4",
        "rounded-[var(--ui-radius,0.5rem)]",
        "hover:brightness-[var(--ui-hover,0.96)]",
        "focus-visible:ring-[var(--ui-color-focus)]",
      ]),
    );
  });

  it("se puede deshabilitar", () => {
    render(<Button disabled>Guardar</Button>);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeDisabled();
  });
});

describe("Input", () => {
  it("asocia la etiqueta y cambia el foco a puntero", () => {
    render(
      <>
        <Label htmlFor="nombre">Nombre</Label>
        <Input id="nombre" focusTrigger="pointer" />
      </>,
    );
    const field = screen.getByRole("textbox", { name: "Nombre" });
    expect(classes(field)).toContain("focus:ring-[var(--ui-color-focus)]");
    expect(classes(field)).not.toContain("focus-visible:ring-[var(--ui-color-focus)]");
  });
});

describe("Badge y Label", () => {
  it("cambia la variante", () => {
    render(
      <div>
        <Badge variant="default">Normal</Badge>
        <Badge variant="danger">Error</Badge>
      </div>,
    );
    expect(classes(screen.getByText("Normal"))).toContain("bg-[var(--ui-color-soft)]");
    expect(classes(screen.getByText("Error"))).toContain("text-[var(--ui-color-danger)]");
  });
});

describe("Switch", () => {
  it("usa tokens de medida y se opera con teclado", async () => {
    const user = userEvent.setup();
    render(
      <Label>
        <Switch switchWidth="2.75rem" duration="80ms" />
        Activo
      </Label>,
    );
    const control = screen.getByRole("switch", { name: "Activo" });
    expect(control.parentElement).toHaveStyle({ "--ui-switch-width": "2.75rem" });
    expect(classes(control.parentElement!.querySelector(".ui-switch-thumb")!)).toContain(
      "peer-checked:translate-x-[var(--ui-switch-travel,1.125rem)]",
    );
    await user.click(screen.getByText("Activo"));
    expect(control).toBeChecked();
  });

  it("hereda el tema del provider", () => {
    render(
      <ThemeProvider theme={{ primary: "#3d5a80", duration: "320ms" }}>
        <Button>Guardar</Button>
      </ThemeProvider>,
    );
    const root = screen.getByRole("button", { name: "Guardar" }).parentElement;
    expect(root).toHaveStyle({
      "--ui-color-primary": "#3d5a80",
      "--ui-duration": "320ms",
    });
  });
});
