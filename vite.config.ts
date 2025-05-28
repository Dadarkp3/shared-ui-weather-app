import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared_ui",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/atom/Button/index.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    tailwindcss(),
  ],
  server: {
    port: 3001,
  },
});
