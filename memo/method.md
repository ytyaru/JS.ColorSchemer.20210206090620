# 方法

　動的にCSSを変更する方法は、`<style>`を動的変更することで実現する。JSでDOMを操作する。

```javascript
const style = document.createElement('style');
style.textContent = '...CSS...';
document.head.appendChild(style);
```

## 疑似クラス

　疑似クラスを動的に変更する手段はこれしかない。

## ダメな方法

* cssファイルを用意する
* 要素の`style`属性値を設定する

### cssファイルを用意する

　ファイル数分のパターンしかつくれない。RGB値が1だけ変更したときも変更したいので全パターン揃えるのは非現実的。

### 要素の`style`属性値を設定する

　対象要素を選ばねばならない。JSで毎回対象要素を選ばねばならない。それはCSSで定義したい。

