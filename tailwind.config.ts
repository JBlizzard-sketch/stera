import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        steraGold: "#F5B11A",
        steraWhite: "#FFFFFF",
        steraGray: "#A9A9A9",
        steraBgDark: "#2E2E2E",
        steraBgLight: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "stera-gradient": "linear-gradient(135deg, #2E2E2E, #F2F2F2)",
      },
      boxShadow: {
        glow: "0 0 10px rgba(245, 177, 26, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
