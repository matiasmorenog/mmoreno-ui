import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { exampleTheme, themeStyle } from "./tokens";

describe("tokens", () => {
  it("traduce el tema a variables CSS", () => {
    const style = themeStyle({
      primary: "#3d5a80",
      radius: "999px",
      duration: "240ms",
      easing: "ease-out",
      elevation: "none",
    });
    expect(style).toMatchObject({
      "--ui-color-primary": "#3d5a80",
      "--ui-radius": "999px",
      "--ui-duration": "240ms",
      "--ui-ease": "ease-out",
      "--ui-shadow": "none",
    });
  });

  it("el ejemplo del catálogo es neutro y está en el CSS", () => {
    const css = readFileSync(resolve(process.cwd(), "src/styles/themes.css"), "utf8");
    expect(css).toContain(exampleTheme.primary);
    expect(css).toContain("prefers-reduced-motion");
    expect(css).toContain("--ui-duration");
    expect(css).toContain("--ui-ease");
  });
});
