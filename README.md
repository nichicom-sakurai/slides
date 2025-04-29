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

## 新しいページの追加

新しいHTMLページを追加した場合は、`vite.config.js`の`rollupOptions.input`に追加する必要があります：

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        // 新しいページを追加した場合はここに追記
        // 例: newpage: 'newpage.html'
      }
    }
  }
})
```

これにより、ビルド時に新しいページがバンドルに含まれるようになります。

