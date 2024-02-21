/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        2: "2px",
        30: "30px",
        70: "70px",
        100: "100px",
        250: "250px",
        650: "650px",
        55: "55rem",
        90: "90rem",
      },
      width: {
        3: "30rem",
        18: "4.25rem",
        30: "30vw",
        40: "40vw",
        50: "50vw",
        60: "60vw",
      },
      height: {
        65: "65rem",
        50: "50vh",
        60: "60vh",
      },
      margin: {
        1: "1%",
        0.9: "0.9rem",
        1.1: "1.1rem",
        2.2: "2rem",
        3: "-3rem",
        30: "30rem",
        22: "revert",
      },
      padding: { 5: "5%", },

      top: { 28: "-28px" },

      gap: {
        1: "1rem",
      },
      letterSpacing: {
        wide: "5px",
        widest: "5rem",
      },
      lineHeight: {
        nd: "0px",
      },
      fontSize: {
        0: "0px",
        sss: "0.35rem",
        ss: "0.60rem",
        "11xl": "150px",
        "7xl": "5rem",
        "9xl": "7rem",
        "13xl": "13rem",
      },
      borderRadius: {
        default: "40%",
        half: "50%",
        small: "30px",
        large: "100px",
      },
      gridTemplateColumns: {
        3: "repeat(3, minmax(0, 4rem))",
      },
      gridTemplateRows: {
        2: "repeat(2, minmax(0, 1.5rem))",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(-30px)" },
          "75%": { transform: "translate(30px)" },
          "100%": { transform: "translate(0)" },
        },
        toAppear: {
          from: {transform: "translateX(-100px)"},
          to: {transform: "translateX(0px)", opacity: "1"}
        },
        girar: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        toAppear: "toAppear 5s ease-in-out forwards",
        toAppearPlus: "toAppear 10s ease-in-out forwards",
        shake: "shake 4s ease-in-out infinite",
        shakeHover: "shake 1s ease-in-out infinite",
        mainShake: "shake 8s cubic-bezier(0.36, 0, 0.66, -0.56) 5s infinite",
        girar: "girar 1s linear infinite",
      },
      screens: {
        gm: "920px",
        "3xl": "2180px",
        "4xl": "3100px",
      },
    },
  },
  plugins: [],
};
