/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#663635",
      },
      keyframes: {
        moveInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "80%": { transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        moveInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "80%": { transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        moveInRight: "moveInRight 1s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
