---
title: Bracketsを使ってみました
date: 2015-01-21T12:53:14 UTC+9
author: Wakabayashi, Kenichi
layout: post
permalink: /note/brackets/
attitude_sidebarlayout:
  - default
image: /assets/images/2015/01/brackets.png
categories:
  - for creators
tags:
  - Adobe
  - Brackets
  - Editor
  - Mac
  - Windows
---
MacではJedit、Windowsでは秀丸を使ってきたのですが、最近クロスプラットフォームのテキストエディタが多数出てきていて、その中でも["Sublime Text"](http://www.sublimetext.com/){:target="_blank"}を中心に試していましたが、最終的に["Brackets"](http://brackets.io/){:target="_blank"}をメインに使い続けることを決めましたので、自分なりに気に入ったポイントを紹介します。

主な特徴としては、このサイトに書いてあるものが使いやすいです。<br />
Bracketsの機能紹介、使い方解説【Ver.1.1対応】

以上！ってぐらいここのまとめが特長を的確に説明してくださっていますので、全体的にはそちらを見てください。

Sublime Text2やAtomと比較して絶対的にいいのは、メニューやメッセージが日本語表示であるという点ですね。初心者には特に重要です。私が、ツールを探す時のポイントとして「他の人にも紹介できるか？」というのがあります。人に使い方を教えるようなシーンを考えると、自分が普段使っているツールをそのまま教えた方がいいので、そういう意味ではSublime Textなんかは敷居が高いです。

複数ファイルを開いた時、左サイドバーにファイル名が縦に並んで表示されるのでファイル名が見切れにくいのもいいです。必要な情報が見えやすくて画面スペースが有効活用されている感じです。また、Sublime Textが初めて実装した同じキーワードを複数同時選択&編集がBracketsでもできる(Ctrl + B)のもいい、これが使いたくてSublime Textを使いかけていたので、これができるならBracketsに切り替えようという感じです。

無料であることも、他の人におすすめするという観点では重要です。
Sublime Textも無料のままで使えますが、有償ソフトウェアですので、使い続けるつもりならお金は払うべきですし。Atomは無料ですが、完成度がまだまだという感じ。

プラグイン関係のまとめはここが参考になりますね。
Brackets おすすめプラグイン集・解説

以下に、用途(Web or プログラミング)に関係なく共通的に使えそうなプラグインを挙げておきます。どのプラグインも「拡張機能マネージャー」で名前を入れて検索すると出てきます。

- [Show Whitespace](https://github.com/DennisKehrig/brackets-show-whitespace){:target="_blank"}  
空白文字やタブ文字を表示する。
- [Brackets Bookmarks](https://github.com/toshsharma/brackets-bookmarks){:target="_blank"}  
ファイルの中にブックマークを付けて、ジャンプできる。
- [Code Folding](https://github.com/thehogfather/brackets-code-folding){:target="_blank"}  
ソース内の折り畳みが可能。
- [Indent Guides](https://github.com/lkcampbell/brackets-indent-guides){:target="_blank"}  
インデント列に縦線を付けて読みやすくする。
- [String Convert](https://github.com/mikechambers/StringConvert){:target="_blank"}  
タブとスペース、HTMLエンティティへの変換ができる。

マイナスポイントは、SHIFT-JISが使えない(Windows用アプリのコーディングをするときには困ることがあります)ことと、印刷ができないのが不便かな。
印刷ができないのは、Sublime Textも同じですがプラグインでサポートされていますので、同じようなプラグインがBracketsにも出てくることを期待します（あくまでも人頼み）

![brackets](/assets/images/2015/01/brackets.png)
