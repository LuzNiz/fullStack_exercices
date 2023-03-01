/*
Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos de Enteros del mismo tamaño
Los dos primeros arreglos contienen los números que se quieren multiplicar
El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos 

*/

import "./styles.css";

const v1: number[] = [1, 2, 3]; //Creo el primer arreglo de longitud 3
const v2: number[] = [4, 5, 6]; //Creo el segundo arreglo de longitud 3
const v3: number[] = [2, 1, 2]; //Creo el tercer arreglo de longitud 3
const v4: number[] = [1, 2, 1]; //Creo el cuarto arreglo de longitud 3

const vResultado: number[] = new Array(3); //Creo el arreglo que almacenará los resultados de la multiplicación

function arrResultado(
	arr: number[],
	arr2: number[],
	arrResult3: number[]
): any {
	//Creo la función que calculará la multiplicación y recibirá como parametro 3 arreglos
	for (let i: number = 0; i < arrResult3.length; i++) {
		//Ejecuto un ciclo for, donde la condición sea que el contador (i) sea menor a la longitud del arreglo que almacenará el resultado
		arrResult3[i] = arr[i] * arr2[i]; // El resultado de la multiplicación de los valores posicionados en la posición dada por el contador, se almacenarán en la posición dada por el contador
	}
	return arrResult3; //Retorno el arreglo que almacena los resultados
}

arrResultado(v1, v2, vResultado); //Llamo a la función con los arreglos 1 y 2, y el arreglo resultado donde se almacenarán sus multiplicaciones
arrResultado(vResultado, v3, vResultado); // Llamo a la función con el resultado de la primera multipl. y el arreglo 3, la multiplicación de ambos se almacenará en el arreglo resultado
arrResultado(vResultado, v4, vResultado); // Llamo a la función con el resultado de la primera multipl. y el arreglo 4, la multiplicación de ambos se almacenará en el arreglo resultado
