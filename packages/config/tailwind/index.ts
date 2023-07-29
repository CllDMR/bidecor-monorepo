import type { Config } from "tailwindcss";

export default {
  content: [""],
  theme: {
    extend: {
      colors: {
        dark: "#f0f2f5",
        primary: "#e32f6f",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#efefef",
          ".sidebar": {
            "background-image": "linear-gradient(195deg,#42424a,#191919)",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#1a2035",
          ".sidebar": {
            "background-image": "linear-gradient(195deg,#323a54,#1a2035)",
          },
        },
      },
    ],
  },
} satisfies Config;
