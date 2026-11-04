import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For a user/org GitHub Pages site (akilanvadivelan1.github.io) base is "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
