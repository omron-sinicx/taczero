# TacZero project page

TacZero のプロジェクトページのローカル編集用プロジェクトです。

## ローカルで起動

Node.js と npm を使用する場合:

```powershell
cd C:\codes\taczero
npm ci
npm run dev
```

http://localhost:8080 でプレビューできます。ビルドは `npm run build`、ビルド結果の確認は `npm run preview` です。
pnpm を使用する場合は `pnpm install` 後、`pnpm run dev` / `pnpm run build` を実行できます。

## 編集箇所

- `template.yaml`: タイトル、概要、本文、著者、論文・動画等のリンク
- `public/`: 論文 PDF と画像
- `src/components/`: ページの構成
- `src/scss/theme.scss`: スタイル

タイトル・概要・手法・結果・成功例・失敗と限界の説明は、掲載 PDF に対応する v4 ソース ZIP の `main.tex`（TacZero、Experiments、Discussion）に基づきます。結果は論文の Insertion outcomes by condition 表、成功例は Fig. 4 の記述を要約しています。
論文 PDF は `output/pdf/taczero_arxiv_20261006_v4/taczero_arxiv_v4.pdf` のコピー、画像は同版のソース ZIP 内の図から作成しています。
著者は Kazutoshi Tanaka ひとりで、個人ページへのリンクを設定済みです。所属・会議・arXiv・コード・動画・引用情報は未設定です。確定後に `template.yaml` の null を置き換えてください。

## GitHub Pages

公開先: https://omron-sinicx.github.io/taczero/

`main` への push で `.github/workflows/deploy.yaml` が Node.js 24 と `npm ci` を使ってビルドし、`build/` を GitHub Pages に公開します。GitHub の Settings → Pages → Source は GitHub Actions を使用します。Actions から手動実行もできます。

## テンプレートの出典

[OMRON SINIC X projectpage-template](https://github.com/omron-sinicx/projectpage-template)
取得元 commit: `bd4a73929b729c6985effbcf4a6d29805d92105d`
2026-10-06 に `C:\codes\taczero-projectpage` から編集用ファイル一式をこのリポジトリへコピーしました。コピー元はそのまま残しています。
`node_modules/`、`build/`、ローカルのビルドログは取り込んでいません。このリポジトリの Git 設定（`omron-sinicx/taczero`）を維持しています。
テンプレートの元 README は `TEMPLATE_README.md` に保存しています。
`.github/workflows/` に CI と GitHub Pages の公開設定があります。
