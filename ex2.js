	function changeSource() {
		
		console.log("Entrou");

		var lampadaElement = document.getElementById('lampada');


		console.log(lampadaElement.getAttribute("src"));

		if(lampadaElement.getAttribute("src") == "lampada_off.gif") {
			lampadaElement.src = "lampada_on.gif"
		} else {
			lampadaElement.src = "lampada_off.gif"
		}
	} 


	function init(){
     	var lampadaElement = document.getElementById('lampada');
     	lampadaElement.addEventListener("click", changeSource, false);
	}
