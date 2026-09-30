import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        smoke: "#f7f3ed",
        paper: "#fffaf2",
        muted: "#78736c",
        line: "rgba(18,18,18,0.12)",
        violet: "#8B5CF6",
        moss: "#5D7C60",
        clay: "#B66A50",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 80px rgba(18,18,18,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
