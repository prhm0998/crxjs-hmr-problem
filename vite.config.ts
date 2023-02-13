import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [solidPlugin(), crx({ manifest })],
});
