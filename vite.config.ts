import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function heroPreloadPlugin(): Plugin {
  return {
    name: "hero-preload",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        for (const [fileName] of Object.entries(ctx.bundle)) {
          if (fileName.match(/assets\/hero-tech.*\.webp$/)) {
            const tag = `<link rel="preload" as="image" type="image/webp" href="/${fileName}" fetchpriority="high" />`;
            return html.replace("</head>", `${tag}\n</head>`);
          }
        }
        return html;
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), heroPreloadPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
}));
