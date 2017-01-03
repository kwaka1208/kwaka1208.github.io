	var output;
	function Connect(wsUri)
	{
		output = document.getElementById("console");
		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt) { onOpen(evt) };
		websocket.onclose = function(evt) { onClose(evt) };
		websocket.onmessage = function(evt) { onReceive(evt) };
		websocket.onerror = function(evt) { onError(evt) };
	}

	function Close()
	{
		websocket.close();
	}

	/**
		WebSocket接続時
	*/
	function onOpen(evt)
	{
		writeToScreen("Connected");
	}

	/**
		WebSocket切断時
	*/
	function onClose(evt)
	{
		writeToScreen("Disconnected");
	}

	/**
		WebSocketレスポンス受信時
	*/
	function onReceive(evt)
	{
		writeToScreen('<span style="color: blue;">Response: ' + evt.data+'</span>');
		websocket.close();
	}

	/**
		エラー発生時
	*/
	function onError(evt)
	{
		writeToScreen('<span style="color: red;">Error:</span> ' + evt.data);
	}

	/**
		メッセージ送信
	*/
	function onSend(message)
	{
		writeToScreen("Sent: " + JSON.stringify(message));
		websocket.send(JSON.stringify(message));
	}

	function writeToScreen(message)
	{
		var pre = document.createElement("li");
//		pre.style.wordWrap = "break-word";
		pre.innerHTML = message;
		output.appendChild(pre);
	}
