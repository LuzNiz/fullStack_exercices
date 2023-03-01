/*
Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

import "./styles.css";
//Le pido al usuario la longitud del array (cuantos número va a ingresar)
let dimension = Number(prompt("Ingrese la cantidad de numeros")) - 1;
//Defino el arreglo con el parámetro de la dimensión dada por el usuario
let arrNum: number[] = new Array(Number(dimension));

//Ejecuto un ciclo for, con la condición de que el contador sea mayor o igual a 0
// y que decremente en 1
for (let i = dimension; i >= 0; i--) {
  //Almaceno en el array en la posición según el contador el número dado por el usuario
  arrNum[i] = Number(
    prompt(`ingrese nombre para colocarlo en la posición ${i + 1}:`)
  );
  //Muestro por consola el número de la posición y el valor asignado
  console.log(`El nombre en la posición ${i} es: ${arrNum[i]}`);
}

//Muestro por consola el array
console.log(arrNum);
