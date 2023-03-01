/*
Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor

Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato ingresado por al usuario)

*/

import "./styles.css";

let cantidadDados: number = Number(prompt("¿Cuántos dados va a lanzar?")); //Le consulto al usuario cuántos dados va a lanzar
let probabilidadCara: number = 1 / 6; //Declaro un variable con la probabilidad por cara
let probabilidadFinal: number = 1; //Declaro la probabilidad final en 1

for (let i: number = 1; i <= cantidadDados; i++) {
	//Ejecuto un for donde el contador (i) comience en 1, con la condición de que sea menor o igual a la cantidad de dados
	probabilidadFinal = probabilidadFinal * probabilidadCara; //Si la condición es true ingreso al for y probabilidad final va a ser igual que la multiplicación de
} // probabilidad final por probabilidad de la cara

alert(`Su probabilidad es de: ${probabilidadFinal}`); //Muestro al usuario su probabilidad
console.log("Su probabilidad es de: ", probabilidadFinal); //Muestro por consola la probabilidad
