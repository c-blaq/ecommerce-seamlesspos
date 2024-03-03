import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B42E4",
        },
        secondary: {
          DEFAULT: "blue",
        },
        textGray: {
          100: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
