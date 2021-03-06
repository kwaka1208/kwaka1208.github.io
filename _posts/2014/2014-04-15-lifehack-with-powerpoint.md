---
title: パワポで画像管理的ライフハック
date: 2014-04-15T12:42:02 UTC+9
author: Wakabayashi, Kenichi
layout: post
permalink: /note/lifehack-with-powerpoint/
image : /assets/images/common/ogp.png
attitude_sidebarlayout: default
image: /assets/images/2014/04/medium_748083829.jpg
categories: note
tags:
  - FenrirFS 2
  - PowerPoint
  - タグ
  - ファイル
  - ファイルシステム
  - 管理
---
実は私、先日の某記者会見で出た「パワポで画像管理」にとっても反応してしています。
「パワポで画像管理するのか？（苦笑）」「パワポって何？」と様々な反応が飛び交っているようですが、騒動の中身とは全然関係なく、また皮肉でも何でもなく、情報管理の手法としてそういうやり方を実践している方もいるのか！という意味で、非常に興味深くみています。

### 一般的なファイル管理の課題
PCを仕事で使う方なら、データファイルの管理は苦心していることが多いと思います。ファイルにつけられる情報でファイルを開かずに確認できるものってファイル名ぐらい。

そのファイルを表す情報はファイル名で表現しなければならないのですが、これが結構つらい。色んな情報を詰め込もうとすると長くなるし、長くなるとFinderとかExplorerで全部表示されなかったりするので、全体俯瞰の状態で目的のデータを探すのは難しい。
ファイル名だけでは厳しいので、フォルダで階層化して分類すればもう少し分かりやすくなるのですが、階層が深くなると、やはり全体俯瞰が難しい。
MacにしろWindowsにしろ、標準のファイルシステムとファイルシステムブラウザ(FinderもしくはExplorer)では、ファイルを属性や付加情報付きで全体俯瞰するのは、なかなか難しいというのが実情だと思います。

### デスクトップアイコンシステム
そこで、多くの方が実践されているのが「デスクトップアイコンシステム」です。いえいえ、そんな難しい話ではありません、デスクトップ上にアイコンをたくさん並べるアレです。

私自身はデスクトップにアイコンを置きたくない人なので、デスクトップ上のアイコンは多くても２個ぐらいなのですが、デスクトップにアイコンをたくさん置いている方を見て、どこに何があるのか把握できているのか？と不思議に思っていました。

でも、みなさん把握しておられるのですよね。どこに何があるのか把握しているので、欲しいファイルに迷わずたどり着く、あれはスゴいです。フォルダで分類する代わりに画面をいくつかのゾーンに分け、ゾーンごとに意味付けを行って、そこにファイルやフォルダを置く。これだけでも結構管理できるようです。しかもデスクトップなので全体が見渡しやすい。

このデスクトップアイコンシステムを使う人が多いうちは、標準のファイルシステムが使いにくい、ということなんでしょう。

### パワポ画像管理システム　≒　デスクトップアイコンシステム
多分、なんですが「パワポ画像管理システム」も、この「デスクトップアイコシステム」に近いのではないかなぁと勝手に想像しています。

もちろん見たわけではないので、あくまでも「勝手に想像」の範囲ですが、パワポという平面の世界で自由に画像を配置し、しかも「パワポ」なので置いた画像の周囲にコメントもつけられ、付加情報を含めて全体俯瞰できる。

しかも、デスクトップと違ってひとつのファイルなので、USBメモリなどに入れて持ち歩けば、どこでも自分のファイル管理システムが再現される。ポータブルなファイル管理システムのできあがりです、素晴らしい！

もし、こんな使い方をされているなら、なかなか理にかなったシステムだと言えます、あながち馬鹿にはできないです。

### ファイル管理を便利にする機能とツール
ただし、パワポに貼付けられるファイルの種類は限りがありますし、自分が持っているデータをすべてパワポに貼付けたら、飛んでもなく巨大なファイルになり、そもそもパワポで開くことが不可能になるかもしれません、やっぱりファイルはファイルシステムで管理させるのが本来の姿。

根本的な解決にはならないかもしれませんが、最近はファイルシステムの改良やツールの登場で、ファイル名やフォルダ名以外での情報管理がしやすくなっています。

Macであれば、「情報をみる」を選択すると「コメント欄」がありますので、ここに情報を書き込むことでファイル名以上の情報を付けることができますし、最新のMavericksで追加された「タグ」機能でも属性情報を付加して、探しやすくすることができます。もちろん、検索にも対応。

OS X Mavericks: ファイルとフォルダに色やラベルでタグ付けする
http://support.apple.com/kb/PH13852?viewlocale=ja_JP&locale=ja_JP

Windowsの方はというと、ファイルの種類によってコメントやタグが付けられたり、付けられなかったりするのですが、ブラウザで有名なフェンリル社のファイル管理ツール「FenrirFS 2」だとMac同様、すべてのファイルに対してタグによる分類ができます。しかも、一画面で管理できますので全体俯瞰という意味でも便利です。

[FenrirFS 2](http://www.fenrir-inc.com/jp/fenrirfs/)

画像ファイルに限定するのであれば「写真管理アプリ」を使うというのもひとつの手。普段、家族や旅行の写真を見るアプリで、細胞の画像を見るのは違和感があるかもしれませんが...。

でも、やっぱりパワポで画像管理が気になる私。もしかしたら、ものすごく斬新な管理手法で、そっちの方が現在のファイルシステムの考え方を破壊するような大発明かもしれない、ってことだったら面白いですね。

![Power Point](/assets/images/2014/04/medium_748083829.jpg)

photo credit: [garethjmsaunders](http://www.flickr.com/photos/garethjmsaunders/748083829/) via [photopin](http://photopin.com) [cc](http://creativecommons.org/licenses/by-sa/2.0/)