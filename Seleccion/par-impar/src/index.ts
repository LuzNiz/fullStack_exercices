/*
Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo
*/

//Solicito al usuario un número
const numeroIngresado: number = Number(prompt("Ingrese un número"));

//Pregunto si el número ingresado es igual a 0
if (numeroIngresado === 0) {
  console.log(
    // Si es true, muestro por consola que no es par ni impar
    "El número ingresado (" + numeroIngresado + ") no es par ni impar"
  );
  //Le muestro al usuario que no es par ni impar
  alert("El número ingresado (" + numeroIngresado + ") no es par ni impar");
} else if (numeroIngresado % 2 === 0) {
  // Pregunto si el resto del número es 0
  console.log("El número ingresado (" + numeroIngresado + ") es par"); //True, muestro por consola que es par
  alert("El número ingresado (" + numeroIngresado + ") es par"); //Le muestro al usuario que es par
} else {
  // Si es false
  console.log("El número ingresado (" + numeroIngresado + ") es impar"); //Muestro por consola que es impar
  alert("El número ingresado (" + numeroIngresado + ") es impar"); //Le muestro al usuario que es impar
}
