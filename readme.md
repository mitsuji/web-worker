# Web Worker API の超簡単デモ

## デモ

ソースコードと console を見ながら確認できます。

### [web/demo1-ui-locked.html](web/demo1-ui-locked.html)
重い処理はUIをロックする (sum1 では span.message が更新されない)

### [web/demo2-ui-worker.html](web/demo2-ui-worker.html)
Web Worker API を使って重い処理を非同期にするとUIがロックされなくなる  
(sum1, sum2 両方で spam.message が更新される)

### [web/demo3-ui-worker.html](web/demo3-ui-worker.html)
demo2 の Promise 使わないバージョン
