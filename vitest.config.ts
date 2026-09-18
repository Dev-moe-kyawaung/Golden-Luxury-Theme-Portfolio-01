import path from "path";
import { fileURLToPath } from "url";
import codspeedPlugin from "@codspeed/vitest-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), codspeedPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "node",
    benchmark: {
      include: ["bench/**/*.bench.{ts,tsx}"],
    },
  },
});
