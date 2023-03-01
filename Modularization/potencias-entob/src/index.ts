/*
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 

*/

import "./styles.css";
//Pido al usuario la base
let base: number = Number(prompt("Ingrese la base"));
//Pido al usuario el exponente
let exponente: number = Number(prompt("Ingrese el exponente"));

//Creo una función la cual tome como parámetro base y exponente
function calcularPotencia(base: number, exponente: number): number {
	//Inicializo la variable que va a la multiplicación del numero * base
	let numero: number = 1;
	//Condición: si el exponente es igual a 0 retorno 1
	if (exponente === 0) {
		return 1;
	} else {
		//En cambio, si el exponente es diferente a 0, inicio un bucle donde inicio el contador, la condición de que el
		// contador sea menor o igual al exponente y que incremente el contador en 1
		for (let i: number = 1; i <= exponente; i++) {
			//La variable numero inicalizada en 1 es igual a (en la primera iteración) 1 * base
			numero = numero * base;
		}
		//Retorno el valor almacenado en la variable número
		return numero;
	}
}

//Muestro al usuario el resultado de la función con los parametros base y exponente
alert(`El resultado es: ${calcularPotencia(base, exponente)}`);
