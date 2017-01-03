	// 音声認識objectの生成
	var recognition = new webkitSpeechRecognition();
	var state = false;                 // 音声認識状態
	recognition.lang = "ja-JP";        // 日本語
	recognition.continuous = false;     // 連続で認識を行う。
	recognition.interimResults = false; // 中間結果の取得を行わない。

    var numText;     // 表示テキストの番号(これが正解になる)
    var numColor;    // 表示色の番号
    var startTime;   // 開始時刻記録

    const MAX_COUNT = 10;  // 繰り返し回数定数
    var counter = 0;       // 繰り返し回数カウンター

	// 発話の認識中
	recognition.onsoundstart = function(){
		$("#state").text("認識中");
	};

	// 発話の認識終了
	recognition.onsoundend = function(){
		$("#state").empty();
	};

	// マッチする言葉がなかった。
	recognition.onnomatch = function(){
		$("#result").text("もう一度試してください");
	};
	//エラー
	recognition.onerror= function(){
		$("#result").text("Error: " + event.error);
	};

	//認識が終了したときのイベント
	recognition.onresult = function(event){
		var results = event.results;
		for (var i = event.resultIndex; i<results.length; i++){
			//認識の最終結果
			if(results[i].isFinal){

                resultValue = results[i][0].transcript;
                $("#result").text(resultValue);
                if (resultValue == colorPattern[numText].answer)
                {
                    result = '正解！　あなたは、' + resultValue + 'と言いました。';
                    $("#result").text(result);
                }
                else
                {
                    result = '間違い！　あなたは、' + resultValue + 'と言いました。';
                    $("#result").text(result);
                    recognition.start();
                    return;
                }
            }
		}
        count++;
        if (count == MAX_COUNT) {
            var endTime = new Date();
            var diffTime = endTime.getSeconds() - startTime.getSeconds();
            var endMessage = 'あなたは、' + diffTime + '秒かかりました。';
            $("#result").text(result);
            exitGame();
        } else {
            $("#result").empty();
            setQuestion();
			recognition.start();
        }
	};

	function buttonControl()
	{
		buttonR = document.getElementById("recog_button");
		if (state)
		{
            exitGame();
		}
		else
		{
            $("#state").empty();
            $("#result").empty();

            // 音声認識開始(マイク許可表示あり)
			recognition.start();
			state = true;

            // ボタン表示変更
            buttonR.value = "トレーニング終了";
			buttonR.className = "btn btn-danger";

            //
            count = 0;
            
            // 出題
            setQuestion();
            startTime = new Date();
		}
	}
	function setQuestion()
	{
        $("#question").empty();
        // 出題
        numText = Math.floor(Math.random() * colorPattern.length);    // 表示する色の名前をランダムに選択。
        numColor = Math.floor(Math.random() * colorPattern.length);   // 色の名前を表示する色をランダムに選択。
        var text = '<span class="' + colorPattern[numColor].color + '">' + colorPattern[numText].display + '</span>';
        $("#question").append(text);
	}

    function exitGame() {
        buttonR.value = "トレーニング開始";
        buttonR.className = "btn btn-primary";
        recognition.stop();
        state = false;
    }
