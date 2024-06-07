/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      spacing: {
        "5px": "5px",
        "7px": "7px",
        "9px": "9px",
        "15px": "15px",
        "19px": "19px",
        "22px": "22px",
        "50px": "50px",
        "330": "330px",
        "390": "390px",
        "440": "440px",
        "600": "600px",
        "40%": "40%",
        "0.5em": "0.5em",
        "1em": "1em",
        "1.5em": "1.5em",
        "2em": "2em"
      },
      zIndex: {
        "100": "100"
      },
      colors: {
        yellow: "#faeba0",
        gray: "#eee",
        textNormal: "#333",
        bgDark: "#4a4a4a",
        black: "#555",
        brown: "#673704",
        darkYellow: "burlywood"
      },
      fontSize: {
        subHeading: "1.4rem"
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        sansJP: ["var(--font-noto-sans-jp)"]
      },
      transitionProperty: {
        inherit: "inherit"
      },
      transitionDuration: {
        3000: "3000ms"
      },
      rotate: {
        "135": "135deg"
      },
      gridTemplateColumns: {
        worksList: "repeat(auto-fill, minmax(280px, 1fr))",
        workInfo: "150px 1fr",
        workInfoCombo: "440px 1fr"
      },
      aspectRatio: {
        "4/3": "4 / 3"
      },
      animation: {
        mvTextAnimation: "mvTextAnimation 2.3s ease-in-out 0.4s"
      },
      keyframes: {
        mvTextAnimation: {
          "0%, 100%": { opacity: "0", visibility: "hidden" },
          "30%": { opacity: "1", visibility: "visible" }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".button-hover": {
          transition: "opacity .3s",
          "&:hover": {
            opacity: ".7"
          }
        }
      });
    })
  ],
  darkMode: "class"
};
export default config;
