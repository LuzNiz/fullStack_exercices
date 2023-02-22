/*
Desarroole un algoritmo que, de acuerdo a la altura de una
persona, decida si puede entrar a un juego en un parque de diversiones
Para poder subirse a la montala rusa la persona debe medir 1.30mts o más
*/

const heightinput = document.getElementById("heightinput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
let height: number;

btn.addEventListener("click", (even) => {
  even.preventDefault();
  height = Number(heightinput.value);
  if (height >= 1.3) {
    result.innerText = "Puede subirse";
    console.log("Puede subirse");
  } else {
    result.innerText = "No puede subirse";
    console.log("No puede subirse");
  }
});
