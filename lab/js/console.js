	function ConsoleOut(message)
	{
		output = document.getElementById("console");
		var pre = document.createElement("p");
		pre.innerHTML = message;
		output.appendChild(pre);
	}
	function ConsoleClear()
	{
		output = document.getElementById("console");
		while (output.firstChild) {
		  output.removeChild(output.firstChild);
		}
	}