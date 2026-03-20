import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          i18n: ["i18next", "react-i18next", "i18next-http-backend", "i18next-browser-languagedetector"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-slot", "@radix-ui/react-toast", "@radix-ui/react-tooltip", "class-variance-authority", "clsx", "tailwind-merge"],
        },
        experimentalMinChunkSize: 10_000,
      },
    },
  },
}));
