import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("se queda con la clase de Tailwind que gana", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("ignora valores vacíos", () => {
    expect(cn("h-10", false, undefined, "px-4")).toBe("h-10 px-4");
  });
});
