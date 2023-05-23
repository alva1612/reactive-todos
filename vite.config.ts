import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteSvgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteSvgr()],
  build: {
    outDir: "./dist",
  },
});
