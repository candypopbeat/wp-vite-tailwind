/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.php", "./assets/**/*.js", "./assets/*.js"],
  theme: {
    extend: {
      colors: {
        first: "#394a51",
        second: "#7fa99b",
        third: "#fbf2d5",
        fourth: "#fdc57b",
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
