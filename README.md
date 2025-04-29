# Slides

<img src="docs/images/logo.png" alt="reveal.js">

## Get Started

`git clone` 後、以下のコマンドを実行します。

```shell
$ make bs
```

環境が整っているかどうかを確認する場合は以下のコマンドを実行します。

```shell
$ make doctor
```

## 開発サーバーの起動

以下のコマンドで開発サーバーを起動できます:

```shell
$ bun run dev
```

## ビルド

以下のコマンドでビルドを実行できます:

```shell
$ bun run build
```

ビルドすると `docs` ディレクトリに出力されます。出力されたファイルは自動的にGitHub Pagesにデプロイされ、以下のURLで公開されます:

https://nichicom-sakurai.github.io/slides/
