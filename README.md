## 概要
- WordpressテーマをViteとTailwindで開発するためのコード
- SassコンパイルとViteサーバー用にNode.jsが必要（無い場合はインストールしてください）

## インストール
1. Wordpressの自作の空のテーマフォルダにクローンする
1. npm install する
1. npm run dev する
1. 自作テーマに切り替えて表示を確認する

## 使い方
- 上記のインストールを行う
- Tailwindを使ってテーマ開発を進める
- 開発中は npm run dev をしてリアルタイムコンパイルを行う
- 完成後は npm run build （ビルド、出力）してコンパイル環境がなくても動くようにする

## コマンド
```bash
# リアルタイムコンパイル（開発中）
npm run dev

# コンパイルファイルたちの出力（完成後）
npm run build
```
