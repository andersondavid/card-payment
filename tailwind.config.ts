import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "archivo-black": "Archivo Black",
      "public-sans": "Public Sans",
      "lexend-mega": "Lexend Mega",
    },
    colors: {
      "nb-pink": "#E91E63",
      "nb-blue": "#5BBCFF",
      "nb-dark-blue": "#3F83B2",
      "nb-green": "#00fd68",
      "nb-clear": "#EEEDEB",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "#00000000",
    },
  },
  plugins: [],
};
export default config;
