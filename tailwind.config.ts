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
        primary: "rgb(var(--primary-rgb))",
        "primary-hover": "rgb(var(--primary-hover-rgb))",
        blue: "rgb(var(--blue-rgb))",
        "blue-hover": "rgb(var(--blue-hover-rgb))",
        "divider-gray": "rgb(var(--divider-gray-rgb))",
        "border-gray": "rgb(var(--border-gray-rgb))",
        "border-gray-hover": "rgb(var(--border-gray-hover-rgb))",
      },
      boxShadow: {
        dual: "0px 8px 15px 0px rgba(var(--shadow-sm-rgb)), 0px 0px 4px 0px rgba(var(--shadow-lg-rgb))",
      },
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
