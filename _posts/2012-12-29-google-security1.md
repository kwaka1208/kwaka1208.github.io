---
id: 188
title: Googleサービスのセキュリティを強化する(その1:二段階認証の設定)
date: 2012-12-29T07:05:21+00:00
author: kwaka1208
layout: post
guid: http://kwaka1208.net/?p=188
permalink: /google-security1/
image:
  - ""
seo_follow:
  - 'false'
seo_noindex:
  - 'false'
categories:
  - for users
tags:
  - Gmail
  - Google
  - Hack
  - パスワード
  - 二段階
  - 強化
  - 認証
---
最近、Gmailのアカウント乗っ取りが多数発生しているそうで、<span class="emphasis">二段階認証</span>によるセキュリティ対策が叫ばれています。ただし、<span class="emphasis">二段階認証</span>を利用するとブラウザ以外、つまりiPhoneやAndroidスマートフォンのアプリで<span class="emphasis">アプリケーション固有のパスワード</span>の設定が必要となります。

ここでは、まず二段階認証の設定の手順について解説していきたいと思います。

※安全なパスワードを利用するというのも、セキュリティ強化の有効な手段です。"<a href="http://kwaka1208.net/how-to-create-safe-password/">安全で管理しやすいパスワードの作り方</a>"を見て、ご自身のパスワードを見直されることもおすすめします。

<hr>
<h2>二段階認証を設定する</h2>
二段階認証とは、今までのIDとパスワードでの認証に加えて電話を使った確認を追加で行うことで、利用者本人を確認します。といっても、電話を使った認証は同一PC上の同一ブラウザで利用する時の最初の一回だけなので、一度やってしまえばあとは今まで通りIDとパスワードだけでOKです。毎回電話を使うわけではありません。

ただし、同じPC上でも異なるブラウザを使う場合は、そのブラウザで初めて利用する時に電話による認証が必要です。
それでは具体的なステップを説明します。

<h3>1.設定画面を開く</h3>
以下のリンクから設定画面に入ってください。
<a href="https://www.google.com/settings/security?hl=ja">アカウントのセキュリティ設定(このリンクをクリックorタップ)</a>

<h3>2.二段階認証を有効にする</h3>
以下の画面が開きます。"2段階認証プロセス"が"OFF"になっていると思いますので、その右側の"編集"ボタンを押してください。"ON"になっている場合は、既に2段階認証設定済みですのであらためて設定することはありません。

<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google1.png" alt="セキュリティ設定" width="400" height="169" />

"編集"ボタンを押した直後にパスワードの入力を求められますのでパスワードを入力すると以下の画面が開きますので、"設定を開始"を押してください。
<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google2.png" alt="ステップ説明" width="400" height="176" />

<h3>3.認証コードの受け取り方を指定する</h3>
すると以下の画面が開きます。
<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google3.png" alt="コード送信画面" width="400" height="216" />"

"信頼できないパソコンや端末"というのは今までに一度も認証したことが無い機器という意味です。ここでコードを入力することでそのパソコン(とそのブラウザ)は信頼できるということになります。入力するコードの受け取り方は次の2つ
<ul>
	<li>テキストメッセージで受け取る</li>
	<li>音声通話</li>
</ul>
テキストメッセージなら入力したアドレス宛にメールでコードが送られてきます。音声通話を選んだ場合は、電話がかかってきて自動音声で6桁のコードが伝えられます。画面には"携帯端末を設定する"とありますが"音声通話"を選択すれば、固定電話で認証することもできます。

<h3>4.認証コードを入力する</h3>
いずれかを選んで"コードを送信"ボタンを押すとコード入力画面に切り替わり、コードが送られてきます、音声通話の場合すぐに電話がかかってきます。メッセージもしくは音声で伝えられたコードを入力して"確認"ボタンを押してください。
<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google4.png" alt="コード入力画面" width="400" height="357" />

<h3>5.今後も継続的に信頼するかどうかを入力する</h3>
コードが正しく入力されると以下の画面が表示されます。認証に使ったパソコンがあなた個人のものであれば、"このパソコンを信頼できるパソコンとして登録する"にチェックを入れて"次へ"をおしてください。

あなた個人のパソコンではなく、誰かに借りたものや公共施設やホテル等不特定多数の方が使う可能性があるパソコンから認証したのであればこのチェックは入れないでください。
<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google5.png" alt="認証完了" width="400" height="288" />

<h3>6.設定完了</h3>
以上で、二段階認証の設定は完了です、これであなたのGoogleアカウントのセキュリティは強化されました。
<img class="sample-image" src="http://kwaka1208.net/wp-content/uploads/2012/12/google6.png" alt="二段階認証完了" width="400" height="283" />

<h3>アプリケーション固有のパスワードの設定</h3>
Googleのサービスをブラウザではなく、iPhoneやスマートフォン、Mac、PCのアプリで利用している場合は、二段階認証を設定した直後から認証がエラーになってしまいます。これはこれらのアプリが二段階認証で認証されていないためです。

この状態では、GoogleアカウントのIDとパスワードを再入力してもダメで、<span class="emphasis">アプリケーション固有パスワード</span>というものを利用する必要があります。

これについては、以下のエントリーで解説していきます。

"<a href="http://kwaka1208.net/google-security2/">Googleサービスのセキュリティを強化する(その2:アプリケーション固有のパスワードを利用する)</a>"