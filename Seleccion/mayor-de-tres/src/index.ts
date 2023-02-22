/*
Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres
*/

let datoUno = document.getElementById("dato1");
let datoDos = document.getElementById("dato2");
let datoTres = document.getElementById("dato3");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado") as HTMLElement;

btn.addEventListener("click", (e) => {
	e.preventDefault();
	let numeroUno: number = Number(datoUno.value);
	let numeroDos: number = Number(datoDos.value);
	let numeroTres: number = Number(datoTres.value);
	if (numeroUno >= numeroDos && numeroUno >= numeroTres) {
		console.log("El número " + numeroUno + " es el mayor");
		resultado.innerHTML = "El número " + numeroUno + " es el mayor";
	} else if (numeroDos >= numeroUno && numeroDos >= numeroTres) {
		console.log("El número " + numeroDos + " es el mayor");
		resultado.innerHTML = "El número " + numeroDos + " es el mayor";
	} else if (numeroTres >= numeroUno && numeroTres >= numeroDos) {
		console.log("El número " + numeroTres + " es el mayor");
		resultado.innerHTML = "El número " + numeroTres + " es el mayor";
	}
});
