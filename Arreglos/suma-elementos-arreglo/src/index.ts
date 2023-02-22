/*
Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/

import "./styles.css";

let len: number = Number(prompt("Ingrese longitud del arreglo"));
let arrNums: number[] = new Array(len);
let resultado: number = 0;

for (let i = 0; i < len; i++) {
  arrNums[i] = Number(prompt(`Ingrese número ${i} de ${len}`));
  resultado += arrNums[i];
}
console.log(`El resultado de sumar los elementos es: ${resultado}`);
