/*
Escriba un programa que solicite 10 números al usuario y calcule el 
promedio de las mismas. Luego, muestre el resultado por pantalla.
*/
import "./styles.css";

let notas: number;
let suma: number = 0;
let promedio: number;

for (let i: number = 0; i < 10; i++) {
	notas = Number(prompt(`Ingrese nota ${i + 1}`));
	suma += notas;
}
promedio = suma / 10;
console.log(promedio);
alert(`El promedio es: ${promedio}`);
