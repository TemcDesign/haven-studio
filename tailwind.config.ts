import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/headband/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Puedes definir colores personalizados para el modo oscuro aquí
        primary: "#BE7C7E",
        secondary: "#F9CCCA",
        utilityYellow: "#E3A857",
        utilityBrown: "#571C16",
        neutralLight: "#4B4B4B",
        neutralDark: "#AEAEAE",
        dark: "#515151",
      },
    },
  },
  plugins: [],
};
export default config;
