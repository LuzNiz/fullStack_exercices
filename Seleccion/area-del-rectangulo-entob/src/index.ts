/*
Volvamos a implementar el proceso que calcula el área de un rectángulo pero para cualquier base o altura
El usuario debe ingresar la base y altura por teclado
El área debe guardarse en una variable 
El resultado debe ser mostrado por pantalla

*/

import "./styles.css";

//Pido al usuario la base del rectángulo
let baseRectangulo: number = Number(prompt("Ingrese base del rectangulo"));
//Pido al usuario la altura del rectángulo
let alturaRectangulo: number = Number(prompt("Ingrese altura del rectangulo"));

//Almaceno el resultado de base * altura ingresados en una variable
let resultado: number = baseRectangulo * alturaRectangulo;

//Le muestro al usuario la variable donde está almacenado el resultado
alert(`El área del rectángulo es: ${resultado}`);
//Muestro el resultado por consola
console.log(resultado);
