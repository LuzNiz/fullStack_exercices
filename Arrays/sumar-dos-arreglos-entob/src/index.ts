/*
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar 
el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

import "./styles.css";
//Declaro el primer array de longitud 6
const v1: number[] = new Array(6);
//Declaro el segundo array de longitud 6
const v2: number[] = new Array(6);
//Declaro el tercer array de longitud 6 que va almacenar la suma de los anteriores
const vSuma: number[] = new Array(6);

//Inicio un ciclo for, con la condición que el contador sea menor a la longitud del array 1
for (let i: number = 0; i < v1.length; i++) {
	//Le pido al usuario los números
	v1[i] = Number(prompt(`Ingrese el número ${i + 1} de 6`));
}
//Inicio un ciclo for, con la condición que el contador sea menor a la longitud del array 2
for (let i: number = 0; i < v2.length; i++) {
	//Le pido al usuario los números
	v2[i] = Number(prompt(`Ingrese el número ${i + 1} de 6`));
}
//Inicio un ciclo for, con la condición que el contador sea menor a la longitud del array 3
for (let i: number = 0; i < vSuma.length; i++) {
	//Asigno a la variable vSuma el valor de v1 + v2 según la posición del contador 
	vSuma[i] = v1[i] + v2[i];
}

//Muestro por consola los arrays
console.log(v1);
console.log(v2);
console.log(vSuma);
