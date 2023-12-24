module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e1e1e1",
          400: "#c9c9c9",
          500: "#999999",
          700: "#585858",
          900: "#1a1a1a",
        },
        blue_gray: { 400: "#878787" },
        red: { 900: "#c11e1e" },
        deep_orange: { 300: "#ff8f50", 600: "#f24e1e", "300_01": "#ff7262" },
        light_blue: { 400: "#1abcfe" },
        green: { A400: "#0acf83" },
        black: { 900: "#000000" },
        deep_purple: { A100: "#9c83ff", A200: "#a259ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(149deg ,#9c83ff,#ff8f50)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
