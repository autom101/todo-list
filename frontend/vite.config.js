/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
