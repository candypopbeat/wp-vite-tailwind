/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.php", "./assets/**/*.js", "./assets/*.js"],
  theme: {
    extend: {
      colors: {
        first: "#394a51",
        second: colors.pink[500],
        third: "#fbf2d5",
        fourth: "#fdc57b",
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    // テーマのdaisyUI読込
    require("daisyui"),
  ],
  daisyui: {
    // 使用テーマ
    themes: ["light", "dark", "fantasy"],
    // ユーザー環境がダークモードのときのテーマ指定
    darkTheme: "fantasy",
  },
};
