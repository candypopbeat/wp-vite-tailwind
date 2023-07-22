/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.php",
		"./assets/**/*.js",
		"./assets/*.js",
	],
  theme: {
    extend: {},
    screens: {
      sp: "400px",
      tb: "768px",
      pc: "1280px",
    },
  },
  plugins: [
    // テーマのdaisyUI読込
    require("daisyui"),
    function({addComponents}) {
      addComponents({
        // 新規コンテナサイズ
        ".container": {
          maxWidth: "95%",
          "@screen sp": {
            maxWidth: "80%",
          },
          "@screen tb": {
            maxWidth: "768px",
          },
          "@screen pc": {
            maxWidth: "1200px"
          }
        }
      })
    },
  ],
	daisyui: {
    // 使用テーマ
    themes: ["light", "dark", "fantasy"],
    // ユーザー環境がダークモードのときのテーマ指定
    darkTheme: "fantasy",
  },
}
