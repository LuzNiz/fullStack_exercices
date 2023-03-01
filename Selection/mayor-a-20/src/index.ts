/*
Hacer un algoritmo que verifique si el número ingresado por el usuario es mayor a 20 o no
*/

import "./styles.css";
//Declaro una variable donde asigno el número que le solicito al usuario
let userNumber: number = Number(prompt("Ingrese el número a verificar"));

//Pregunto si el número ingresado es mayor a 20
if (userNumber > 20) {
  alert(`El número ${userNumber} es mayor a 20`); //Si es true, le muestro al usuario que es mayor
} else if (userNumber === 20) {
  //Pregunto si el número ingresado es igual a 20
  alert(`El número ${userNumber} es igual a 20`); //Si es true, le muestro al usuario que es igual
} else {
  //En cambio, si es false
  alert(`El número ${userNumber} es menor a 20`); //le muestro al usuario que es menor
}
