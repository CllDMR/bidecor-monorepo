import type { Config } from "tailwindcss";

export default {
  content: [""],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#efefef",
          primary: "#1a2035",
          ".sidebar": {
            "background-image": "none",
            background: "#ededed",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#1a2035",
          primary: "#ec407a",
          ".sidebar": {
            "background-color": "#1a2035",
            "background-image": "linear-gradient(195deg,#323a54,#1a2035)",
          },
        },
      },
    ],
  },
} satisfies Config;
