/*
Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/

import "./styles.css";

//Le pido al usuario la longitud del array
const len: number = Number(prompt("Ingrese un numero"));
//Defino el array con el párametro de la longitud dada por el usuario
const arrNums: number[] = new Array(len);
//Defino la variable que almacenara los numeros positivos
let positivo: number = 0;
//Defino la variable que almacenara los numeros negativos
let negativo: number = 0;
//Defino la variable que almacenara los ceros
let cero: number = 0;

//Ejecuto un ciclo for con la condición de que el contador sea menor a la longitud dada por el usuario
// y que incremente en 1 el contador al finaliza cada iteración
for (let i = 0; i < len; i++) {
  //Pido al usuario un número para que se almacene en la posición del array dada por el contador
  arrNums[i] = Number(prompt(`Ingrese número ${i + 1} de ${len}`));
  //Pregunto si el número ingresado es igual a 0
  if (arrNums[i] === 0) {
    //Si es true incremento la variable cero en 1
    cero++;
    //Pregunto si el número ingresado es mayor a 0
  } else if (arrNums[i] > 0) {
    //Si es true incremento la variable positivo en 1
    positivo++;
    //Pregunto si el número ingresado es menor a 0
  } else {
    //Si es true incremento la variable negativo en 1
    negativo++;
  }
}
//Muestro por consola la cantidad de positivos, negativos y ceros
console.log(`Hay ${positivo} positivos,${negativo} negativos y ${cero} ceros`);
//Muestro por consola el array
console.log("Los números son:", arrNums);
