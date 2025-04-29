import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/league.css'
// our styles to adjust the presentation
import './styles.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

const deck = new Reveal({
  plugins: [Markdown],
  // PDF出力の設定
  pdfSeparateFragments: true, // フラグメントを別ページに分ける
  pdfMaxPagesPerSlide: 1, // 1スライドあたりの最大ページ数
  showNotes: 'separate-page', // スピーカーノートを別ページに表示
})

// PDFエクスポート用のスタイルシートを追加
if (window.location.search.match(/print-pdf/gi)) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = 'node_modules/reveal.js/css/print/pdf.css'
  document.head.appendChild(link)
}

deck.initialize()
