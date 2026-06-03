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
        pure_funcs: ["console.log", "console.warn", "console.error"],
      },
      mangle: { toplevel: true },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core → chunk próprio (cacheável por muito tempo)
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "react-vendor";
          }
          // embla fica junto com o app — sem chunk separado
          // (evita problema de ordem de carregamento)
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    sourcemap: false,
    assetsInlineLimit: 2048,
    cssMinify: true,
    chunkSizeWarningLimit: 300,
  },
});
