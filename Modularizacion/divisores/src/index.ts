/*
Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior
*/

import "./styles.css";

function esMultiplo(numero: number, multiplo: number): boolean {
	//Creo una función que tome como parametro dos números, de tipo boolean
	return numero % multiplo === 0; //Retorno si es true o false que su resto es 0
}

function cantidadDivisores(numero: number): number {
	//Creo la función que recibirá como parametro el numero ing. por el usuario
	let cantidad: number = 0; //Inicializo la variable que va a guardar la cantidad de números divisores
	let divisor: number = 0; //Inicializo la variable (contador) que se va a verificar si es o no divisor del número
	for (divisor = 0; divisor <= numero; divisor++) {
		//Ejecuto ciclo for con la condición que divisor sea menor o igual al numero
		if (esMultiplo(numero, divisor)) {
			//Si la función es múltiplo retorna valor True
			cantidad++; // cantidad se incrementa en 1
		}
	}
	return cantidad; //Retorno el valor almacenado en cantidad
}

let numero: number = Number(prompt("Ingrese número")); //Pido al usiario un número
let divisores: number = cantidadDivisores(numero); // Crea la variable divisores y establezco que es igual a el retorno de la función
//cantidadDivisores con el paramentro número ingresado por el usuario
alert(`El número ${numero} tiene ${divisores} divisores`); //Le muestro las cantidades de divisores al usuario
console.log(`El número ${numero} tiene ${divisores} divisores`); //Muestro las cantidades de divisores por consola
