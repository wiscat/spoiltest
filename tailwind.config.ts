import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "spoil-blue": "rgb(0, 87, 255)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-dark": "rgb(53, 32, 0)",
      },
      fontFamily: {
        kansas: "var(--font-new-kansas)",
        inter: [
          "var(--font-inter)",
          {
            fontFeatureSettings: '"cv11" on, "cv09" on, "cv04" on, "cv03" on',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
