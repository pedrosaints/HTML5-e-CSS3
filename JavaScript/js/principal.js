var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente:nth-child(1)");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
console.log(paciente);
console.log(peso);
console.log(altura);

if((peso <= 0) || (peso >= 1000)){
	paciente.querySelector(".info-imc").textContent ="Peso invalido!";
}

else {

	if((altura <= 0) || (altura >= 3)){
		paciente.querySelector(".info-imc").textContent = "Altura invalida!";
	}

	else {
		var imc = peso / (altura*altura);
		console.log(imc);

		paciente.querySelector(".info-imc").textContent = imc;
	}

}
