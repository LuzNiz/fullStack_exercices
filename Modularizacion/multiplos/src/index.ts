/*
Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero
*/

import "./styles.css";

let numero: number = Number(prompt("Ingrese número 1")); //Pido al usiario un número
let multiplo: number = Number(prompt("Ingrese número 2")); //Pido al usuario un segundo número

function esMultiplo(numero: number, multiplo: number): boolean {
	//Creo una función que tome como parametro dos números, de tipo boolean
	return numero % multiplo === 0; //Retorno si es true o false que su resto es 0
}

if (esMultiplo(numero, multiplo)) {
	//Ejecuto un ciclo en el que la condición sea que el retorno de la función sea true
	alert(`${numero} es múltiplo de ${multiplo}`); //Si la condición es true, le digo al usuario que el número es múltiplo
	console.log(numero, "Es múltiplo de", multiplo); // Si la condición es true, muestro por consola que el número es múltiplo
} else {
	alert(`${numero} No es múltiplo de ${multiplo}`); // Si la condición es false, le digo al usuario que el número no es múltiplo
	console.log(numero, "No es múltiplo de", multiplo); // Si la condición es false, muestro por consola que el número no es múltiplo
}
