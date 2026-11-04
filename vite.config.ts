import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://akilanvadivelan1.github.io/my-portfolio/ (a GitHub Pages
// "project" site), so assets must be referenced under that subpath. If you
// later move this to a user site or a custom domain at the root, set base "/".
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
});
