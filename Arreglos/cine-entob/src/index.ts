/*
Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada

*/

import "./styles.css";
//Creo la matriz a utilizar, tendrá 4 columnas y 3 filas
let arrMatriz: boolean[][] = new Array(3);
arrMatriz[0] = new Array(4);
arrMatriz[1] = new Array(4);
arrMatriz[2] = new Array(4);
let butacasOcupadas: number = 0; //Creo la variable que contendrá la cantidad de butacas Ocupadas
let butacasDesocupadas: number = 0; //Creo la variable que contendrá la cantidad de butacas Desocupadas

//Creo la función que cargará la matriz con valores booleanos aleatorios
function cargarMatriz(vector: boolean[][]): any {
	for (let i: number = 0; i < vector.length; i++) {
		//Ejecuto un for donde contador(i) sea menor que la cantidad de filas
		for (let j: number = 0; j < vector[i].length; j++) {
			//Ejecuto un for donde contador(j) sea menor que la cantidad de columnas
			vector[i][j] = Boolean(Math.round(Math.random())); //Coloco en la posición de la matriz [i][j] un booleano aleatorio
		}
	}
}

//Creo la función que recorrerá la matriz contando las butacas ocupadas y desocupadas
function butacas(vector: boolean[][]): any {
	for (let i: number = 0; i < vector.length; i++) {
		//Ejecuto un for donde contador(i) sea menor que la cantidad de filas
		for (let j: number = 0; j < vector[i].length; j++) {
			//Ejecuto un for donde contador(j) sea menor que la cantidad de columnas
			if (vector[i][j] === true) {
				//Establesco un condicional donde si en la posición de la matriz hay una valor verdadero
				butacasOcupadas++; //incremento la variable butacasOcupadas en 1
			} else {
				//En cambio si en la posición hay un valor false
				butacasDesocupadas++; //Incrementa la variable butacasDesocupadas en 1
			}
			console.log(vector[i][j]); //Muestro por consola los valores de las posiciones de la matriz
		}
	}
	console.log(`Hay ${butacasDesocupadas} butacas desocupadas`); //Muestro por consola la cantidad de butacas Desocupadas
	console.log(`Hay ${butacasOcupadas} butacas Ocupadas`); //Muestro por consola la cantidad de butacas Ocupadas
}
cargarMatriz(arrMatriz); //Llamo la función y le asigno de parametro la matriz creada para que la cargue
butacas(arrMatriz); //Llamo la función y le asigno de parametro la matriz creada para que cuente las butacas
