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
        let desktopHref = "";
        let mobileHref = "";
        for (const [fileName] of Object.entries(ctx.bundle)) {
          if (fileName.match(/assets\/hero-tech-mobile.*\.webp$/)) {
            mobileHref = `/${fileName}`;
          } else if (fileName.match(/assets\/hero-tech.*\.webp$/)) {
            desktopHref = `/${fileName}`;
          }
        }
        const tags: string[] = [];
        if (mobileHref) {
          tags.push(`<link rel="preload" as="image" type="image/webp" href="${mobileHref}" media="(max-width: 640px)" fetchpriority="high" />`);
        }
        if (desktopHref) {
          tags.push(`<link rel="preload" as="image" type="image/webp" href="${desktopHref}" media="(min-width: 641px)" fetchpriority="high" />`);
        }
        if (tags.length) {
          return html.replace("</head>", `${tags.join("\n")}\n</head>`);
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
