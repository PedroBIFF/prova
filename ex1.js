	function  calcularQuantidadeDeDias() {
	
	var startDate = new Date(document.getElementById("chegada").value);
    var saidaDate = new Date(document.getElementById("saida").value);

	var dia = 1000 * 60 * 60 * 24;
            
    var diferenca = parseInt(startDate.getTime() - saidaDate.getTime());
            
    var diferencaFinal = (diferenca / dia);

    var result = -1 * diferencaFinal + 1;

	return result;
	
	}


	function getValorPeloTipo() {
	
		var value = document.getElementById("tipo").value;

		if(value == "single") {
			return 139;
		}

		if(value == "double") {
			return 220;
		}
		if(value == "triplo") {
			return 240;
		}

	}


	function getNumeroDeCriancas () {
		var value = document.getElementById("numero").value;
		return value;

	}

	function calcularTotal () {

		var valorDaDiariaComAdicionalPorCadaCrianca = getValorPeloTipo() + (30 * getNumeroDeCriancas());
		console.log(valorDaDiariaComAdicionalPorCadaCrianca);	

		var total = calcularQuantidadeDeDias() * valorDaDiariaComAdicionalPorCadaCrianca;

		return total;
		
	}

	function alertResult() {
		alert(calcularTotal());
	}

	function init(){
     	var formElement = document.getElementById('form');
     	formElement.onsubmit = alertResult;
	}