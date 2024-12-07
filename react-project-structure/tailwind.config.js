/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(24, 77, 138, 1)",
        secondaryColor: "#0A1B2E",
        aqua: "#00ffff",
        turquoise: "#008080",
        ashGray: "#666666",
        gelBlue: "#299BC6",
      },
      boxShadow: {
        customShadow1: "2px 2px 2px 2px lightgray",
        customShadow2: "2px 2px 4px 8px lightgray",
        customShadow3: "0px 2px 2px 1px lightgray",
        customShadow4: "1px 1px 3px 0px #000",
        customShadow5: "#00BFBF 0 1px 10px",
        customShadow6: "0px 0px 7px 1.5px #66b3ff",
        customShadow7: "#00BFBF 0 1px 7px",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
