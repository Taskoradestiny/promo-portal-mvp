import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcf9",
          100: "#d6f7f0",
          200: "#aef2e1",
          300: "#7de5d1",
          400: "#4ad5bf",
          500: "#1ec2a9",
          600: "#139e89",
          700: "#0f7a6b",
          800: "#0e6158",
          900: "#0f4b43",
        },
      },
      boxShadow: {
        soft: "0 10px 35px rgba(14, 116, 144, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
