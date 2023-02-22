/*
El DT de los infantiles del equipo de fútbol desea saber
el promedio de la edad de los chicos
La edad de los chicos va de 3 a 7 años. Las edades son cargadas
al azar (use la función aleatorio (menorValor, mayorValor), es decir
aleatorio(3,7))
Muestre todas las edades y el promedio de las mismas
*/

import "./styles.css";
let cantidad: number = Number(prompt("Ingrese la cantidad de alumnos")); //Le pido al DT la cantidad de chicos
let arrEdades: number[] = new Array(cantidad); //Creo el array que contendrá las edades con la longitud dada por el DT
let suma: number = 0; //Inicializo la variable que contendrá la suma de la edades
let promedio: number = 0; // Inicializo la variable que contendrá el promedio de las edades

function aleatorio(menorValor: number, mayorValor: number): number {
	// Creo la función aleatoria que generará un número aleatorio para cargar el array
	let numero = Math.round(
		Math.random() * (mayorValor - menorValor) + menorValor
	); //Almaceno el número aleatorio en una variable
	return numero; //Retorno el número aleatorio
}

function promedioEdades(cantidad: number): number {
	// Creo la función que calculará el promedio
	for (let i: number = 0; i < cantidad; i++) {
		//Ejecuto un for con un contador iniciado en 0, y la condición sea que sea menor a cantidad, y después incremento en 1 el contador
		arrEdades[i] = aleatorio(3, 7); // Agrego el valor aleatorio en el array posición
		suma += arrEdades[i]; //Voy sumando en la variable suma todos los valores de array
	}
	console.log(arrEdades); //Muestro los valores de array
	promedio = suma / cantidad; // cálculo el promedio y lo guardo en la variable promedio
	console.log(promedio); //Muestro por consola el promedio
	return promedio; //Retorno el promedio
}

promedioEdades(cantidad); //Llamo a la función y le paso como parametro la variable con el valor dado por el DT
