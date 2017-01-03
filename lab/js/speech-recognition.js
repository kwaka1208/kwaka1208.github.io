
	// 音声認識objectの生成
	var recognition = new webkitSpeechRecognition();
	var state = false;	// 音声認識状態
	recognition.lang = "ja-JP";
	recognition.continuous = true;		// 連続で認識を行う。
	recognition.interimResults = true;	//中間結果の表示オン

	//発話の認識中
	recognition.onsoundstart = function(){
		$("#state").text("認識中");
	};

	//発話の認識終了
	recognition.onsoundend = function(){
		$("#state").text("");
	};

	//マッチする認識が無い
	recognition.onnomatch = function(){
		$("#progress").val("もう一度試してください");
	};
	//エラー
	recognition.onerror= function(){
		$("#progress").val("Error: " + event.error);
	};

	//認識が終了したときのイベント
	recognition.onresult = function(event){
		var results = event.results;
		for (var i = event.resultIndex; i<results.length; i++){
			//認識の最終結果
			if(results[i].isFinal){
				resultValue = $("#result").val() + "\r\n" + results[i][0].transcript;
				$("#result").val(resultValue);
				$("#progress").val("");
			}
			//認識の中間結果
			else{
				$("#progress").val(results[i][0].transcript);
			}
		}
	};

	function recognition_control()
	{
		buttonR = document.getElementById("recog_button");
		if (state)
		{
			buttonR.value = "音声認識開始";
			buttonR.className = "btn btn-primary";
			recognition.stop();
			state = false;
		}
		else
		{
			buttonR.value = "音声認識停止";
			buttonR.className = "btn btn-danger";
			recognition.start();
			state = true;
		}
	}
