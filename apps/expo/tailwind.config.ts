import baseConfig from "@bidecor/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
