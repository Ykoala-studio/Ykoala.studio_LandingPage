import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    ViteImageOptimizer({
      webp: { quality: 75, lossless: false },
      png:  { quality: 75 },
      jpg:  { quality: 75 },
      jpeg: { quality: 75 },
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        // Remove dead code mais agressivamente
        pure_funcs: ["console.log", "console.warn", "console.error"],
      },
      mangle: { toplevel: true },
    },
    rollupOptions: {
      output: {
        // Cada chunk lazy vira arquivo separado → main bundle menor
        manualChunks(id) {
          // React core → chunk próprio (cacheável por muito tempo)
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-vendor";
          }
          // Embla → só baixa quando o carrossel é renderizado (lazy)
          if (id.includes("embla-carousel")) {
            return "carousel-vendor";
          }
          // scheduler (dependência do react-dom)
          if (id.includes("node_modules/scheduler/")) {
            return "react-vendor";
          }
        },
        // Nomes de chunk estáveis para cache de longa duração
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    sourcemap: false,
    // Inline só assets muito pequenos (<2KB) — evita requests extras desnecessários
    assetsInlineLimit: 2048,
    cssMinify: true,
    // Avisa quando qualquer chunk passar de 150KB (sinal de que algo foi esquecido)
    chunkSizeWarningLimit: 150,
  },
});
