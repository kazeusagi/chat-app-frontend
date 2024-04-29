# チャットボット UI

## 環境

### Prettier

基本的な構文フォーマットのみ

### ESLint

解析と一部フォーマット

#### 使用プラグイン

eslint-plugin-tailwindcss: TailwindCssのクラス名ソート (Prettierでも出来るが、動作が不安定だったためESLintで実施)
eslint-plugin-import: import文のソート
eslint-plugin-unused-import: 使用していないimport文の削除

またESLintの機能ではないが、参照の足りないimport文の自動挿入を実行 (source.addMissingImports)
