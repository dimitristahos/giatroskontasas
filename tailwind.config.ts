import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        drcolor: {
          50: "#f0f0f0",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#303030", // Main color
          600: "#262626",
          700: "#1f1f1f",
          800: "#141414",
          900: "#0a0a0a",
          950: "#050505",
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
  plugins: [tailwindTypography, tailwindForms],
  content: [],
};
