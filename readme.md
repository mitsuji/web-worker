# Web Worker API の超簡単デモ

## つたえたいこと
* ブラウザJavaScriptでも重い処理はUIをロックする(イベントハンドラが完了するまでUIは変更されない)
* ただし、多くの一般的な重い処理は既定で非同期化されているので気づきにくい(http,タイマー,画像読み込み...)
* 自分で作った処理が重いときは Web Worker API を使って非同期化が可能


## デモ [[try it]](https://mitsuji.github.io/web-worker/)

ソースコードと console を見ながら確認できます。

### [web/demo1-ui-locked.html](web/demo1-ui-locked.html)
重い同期処理はUIをロックする (sum1 では span.message が更新されない)

### [web/demo2-ui-worker.html](web/demo2-ui-worker.html)
Web Worker API を使って重い同期処理を非同期にするとUIがロックされなくなる  
(sum1, sum2 両方で spam.message が更新される)

### [web/demo3-ui-worker.html](web/demo3-ui-worker.html)
demo2 の Promise 使わないバージョン
