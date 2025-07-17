import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  publicDir: "./static",
  base: command === 'serve' ? '/' : '/WeighYourBias/', // 👈 Switch base based on dev or build
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    host: true,
    port: 5173,
    hmr: {
      timeout: 5000,
    },
  },
}));
