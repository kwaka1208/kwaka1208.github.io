---
title: Create Google Calendar 
date: 2017-5-3T17:00:00 UTC+9
author: Wakabayashi, Kenichi
layout: page
permalink: /tools/create-google-calndar-link.html
attitude_sidebarlayout: default
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css" >
<script>
  $(function() {
    $("#start_date").datepicker();
    $("#end_date").datepicker();
  });
</script>
Googleカレンダー登録用のリンクを作成します。
<form>
	<table>
		<tr>
			<td>イベント名</td>
			<td colspan="2">
				<input type="text" id="text" name="text" value="DojoCon Japan 2017" placeholder="イベントのタイトル">
			</td>
		</tr>
		<tr>
			<td>詳細</td>
			<td colspan="2">
				<input type="text" id="details" name="details" value="DojoCon Japanは日本のCoderDojoコミュニティが開催する年に一回のイベントです。今年のテーマは「つながる〜Dojo to Dojo〜」" placeholder="詳細">
			</td>
		</tr>
		<tr>
			<td>場所</td>
			<td colspan="2">
				<input type="text" id="loc" name="loc" value="立命館いばらきフューチャープラザ　イベントホール" placeholder="場所">
			</td>
		</tr>
		<tr>
			<td>開始日時</td>
			<td>
				<input type="text" id="start_date" name="start_date" value="2017/11/4" placeholder="yyyy/mm/dd">
			</td>
			<td>
				<input type="text" id="start_time" name="start_time" value="" placeholder="hh:mm">
			</td>
		</tr>
		<tr>
			<td>終了日時</td>
			<td>
				<input type="text" id="end_date" name="end_date" value="2017/11/4" placeholder="yyyy/mm/dd">
			</td>
			<td>
				<input type="text" id="end_time" name="end_time" value="" placeholder="hh:mm">
			</td>
		</tr>
	</table>
	<input type="button" name="作成" value="Googleカレンダー登録用リンクを作る" onclick="create_google_calendar_link();">
	<textarea id="result" rows="5" placeholder="ここにリンクができます"></textarea>
</form>
<script type="text/javascript">
	function create_google_calendar_link() {
		text = document.getElementById("text").value;
		details = document.getElementById("details").value;
		loc = document.getElementById("loc").value;
		start = new Date(document.getElementById("start_date").value + " " + document.getElementById("start_time").value);
		end = new Date(document.getElementById("end_date").value + " " + document.getElementById("end_time").value);
		error = "";
		if (start.toString() === "Invalid Date") {
			error += "開始日時の入力に誤りがあります　";
		}
		if (end.toString() === "Invalid Date") {
			error += "終了日時の入力に誤りがあります　";
		}
		if (error != "") {
			alert(error);
			return;
		}

		allday = false;
		if (document.getElementById("start_time").value == "" || document.getElementById("end_time").value == "") {
			/* 両方に時刻の入力がなければ終日にする */
			allday = true;
		}
		link = "http://www.google.com/calendar/event?action=TEMPLATE";
		link += "&text=" + encodeURIComponent(text);
		link += "&details=" + encodeURIComponent(details);
		link += "&location=" + encodeURIComponent(loc);
		link += "&dates=" + convertDateString(start, allday) + "/" + convertDateString(end, allday);
		document.getElementById("result").innerHTML = link; 
	}

	function convertDateString(date, allday) {
		var ret;

		ret =  ("0000" + date.getFullYear()).slice(-4);
		ret += ("00" + (date.getMonth() + 1)).slice(-2);
		ret += ("00" + date.getDate()).slice(-2);
		if (!allday) {
			ret += "T" + ("00" + date.getHours()).slice(-2);
			ret += ("00" + date.getMinutes()).slice(-2) + "00";
		}
		return ret;
	}
</script>