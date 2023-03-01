/*
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2+3+4+5+6+7 =27
*/

let numeroUno: number = Number(prompt("Ingrese un numero"));
let numeroDos: number = Number(prompt("Ingrese otro numero"));
let contador: number;
let suma = 0;

console.log(numeroUno);
console.log(numeroDos);

for (contador = numeroUno; contador <= numeroDos; contador++) {
  suma += numeroUno++;
}
console.log(suma);
alert("El resultado es: " + suma);
