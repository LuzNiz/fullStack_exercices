/*let num :number [] = [20, 14, 8, 0 ,5, 19, 24];

console.log(num)
*/

let dimension = Number(prompt("Ingrese la cantidad de nombres"));

let contador: number;

let personas: string = new Array(Number(dimension));

for (contador = 0; contador < dimension; contador++) {
  personas[contador] = prompt(
    `ingrese nombre para colocarlo en la posición ${contador}:`
  );
  console.log(`El nombre en la posición ${contador} es: ${personas[contador]}`);
}
