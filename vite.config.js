import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/marketplace-react/", // 👈 এটা যোগ করতে হবে
});
