import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import { shadowStyle } from "@mercurio-sc/vite-plugin-styles-in-shadow";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const assetsPath =
    env.VITE_STATICS_STORAGE_HOST_URL +
    env.VITE_STATICS_STORAGE_WC_ASSETS_PATH +
    env.VITE_WEB_COMPONENT_NAME;

  return {
    plugins: [
      react(),
      shadowStyle({
        assetsPath,
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
      rollupOptions: {
        input: `src/${command === "build" ? "index" : "main"}.tsx`,
        output: {
          entryFileNames: `assets/${env.VITE_WEB_COMPONENT_NAME}.js`,
        },
      },
    },
  };
});
