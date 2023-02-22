/*
Construya un algoritmo que tenga dos arreglos: uno que almacene 2 nombres y otro que almacene 3 números,
ambos ingresados por el usuario.
Al final debe imprimir los valores por consola
*/

let contador: number;

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);
let lenNombres: number = nombres.length;
let lenNumeros: number = numeros.length;

for (contador = 0; contador < lenNombres; contador++) {
  nombres[contador] = prompt(
    `ingrese el nombre que quiere poner en el lugar ${contador}:`
  );
  console.log(`El nombre en la posición ${contador} es: ${nombres[contador]}`);
}

for (contador = 0; contador < lenNumeros; contador++) {
  numeros[contador] = Number(
    prompt(`ingrese un numero que quiere poner en el lugar ${contador}:`)
  );
  console.log(`El nombre en la posición ${contador} es: ${numeros[contador]}`);
}
