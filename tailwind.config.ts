import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "light-bg": "#f3f4f6",
        "dark-bg": "#1f2937",
        "light-card": "#ffffff",
        "dark-card": "#374151",
      },
      textColor: {
        "light-text": "#1f2937",
        "dark-text": "#f3f4f6",
        "light-text-secondary": "#4b5563",
        "dark-text-secondary": "#9ca3af",
      },
    },
  },
  plugins: [],
};
export default config;
