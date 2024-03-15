import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "pages", replacement: "/src/pages" },
      { find: "layouts", replacement: "/src/layouts" },
      { find: "routes.js", replacement: "/src/routes" },
      { find: "views", replacement: "/src/views" },
      { find: "variables", replacement: "/src/variables" },
    ],
  },
});
