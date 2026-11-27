import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    cn: "src/cn.ts",
  },
  format: ["esm"],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: false,
  target: "es2022",
  external: ["react", "react-dom", "clsx", "tailwind-merge"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  async onSuccess() {
    mkdirSync("dist", { recursive: true });
    copyFileSync("src/styles/themes.css", "dist/theme.css");
    const file = "dist/index.js";
    const code = readFileSync(file, "utf8");
    if (!code.startsWith('"use client"') && !code.startsWith("'use client'")) {
      writeFileSync(file, `"use client";\n${code}`);
    }
  },
});
