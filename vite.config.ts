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
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 10_000,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("react-helmet-async")) return "seo";
            if (id.includes("i18next") || id.includes("react-i18next")) return "i18n";
            if (id.includes("@radix-ui") || id.includes("class-variance-authority") || id.includes("clsx") || id.includes("tailwind-merge")) return "ui";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
  },
}));
