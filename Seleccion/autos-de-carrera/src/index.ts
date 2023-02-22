/*
En una prueba, un piloto tiene que completar 4 vueltas
Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el promedio de vuelta

*/

let cantidadVueltas: number = 4; //Declaro en una variable la cantidad de vueltas
let vueltaUno: any = document.getElementById("vueltaUno"); //Traigo del HTML en input de la vuelta
let vueltaDos: any = document.getElementById("vueltaDos"); //Traigo del HTML en input de la vuelta
let vueltaTres: any = document.getElementById("vueltaTres"); //Traigo del HTML en input de la vuelta
let vueltaCuatro: any = document.getElementById("vueltaCuatro"); //Traigo del HTML en input de la vuelta
let botonTotal: any = document.getElementById("botonTotal"); //Capturo el boton del HTML
//Capturo el elemento HTML que contendrá el tiempo total
let totalcarrera: any = document.getElementById("totalcarrera");
//Capturo el elemento HTML que contendrá el promedio de las vueltas
let tiempoPromedio: any = document.getElementById("tiempoPromedio");

//"Escucho" que se haga click en el boton capturado y ejecuto una función de flecha
botonTotal.addEventListener("click", function () {
  let valorUno: number = Number(vueltaUno.value); //Declaro una variable que contiene el valor ingresado por el usuario
  let valorDos: number = Number(vueltaDos.value); //Declaro una variable que contiene el valor ingresado por el usuario
  let valorTres: number = Number(vueltaTres.value); //Declaro una variable que contiene el valor ingresado por el usuario
  let valorCuatro: number = Number(vueltaCuatro.value); //Declaro una variable que contiene el valor ingresado por el usuario
  //A la variable tiempo total le asigno el valor de la suma de las vueltas
  let tiempoTotal: number = valorUno + valorDos + valorTres + valorCuatro;
  //A la variable promedio le asigno el valor de la división del tiempo total y la cantidad de vueltas
  let promedio: number = tiempoTotal / cantidadVueltas;
  console.log(
    //Muestro por consola el tiempo total y el promedio
    "El tiempo total es:",
    tiempoTotal,
    "\n",
    "El promedio es:",
    promedio
  );
  totalcarrera.innerHTML = String(tiempoTotal); //Inserto en el HTML el tiempo total
  tiempoPromedio.innerHTML = String(promedio); //Inserto en el HTML el tiempo promedio
});
