/*
Desarrolle un algoritmo que diga el precio de una compra.
La compra se compone del precio del producto y la cantidad.
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%.
*/

//Creo una varible que se le asigna el valor del producto
const productoValor: number = 375;
//Le pregunto al usuario cuantos productos compró
let cantidad: number = Number(prompt("Ingrese la cantidad"));

//Le asigno a la variable gasto la multiplicación entre el valor del producto y la cantidad
let gasto: number = productoValor * cantidad;
//Calculo en una variable el descuento a aplicar
let descuento: number = gasto * 0.1;
console.log(gasto); //Muestro por consola el gasto total

//Pregunto si el gasto es mayor a $1000
if (gasto > 1000) {
  //Si es true
  let montofinal = gasto - descuento; //Creo una variable y le asigno el resultado de la resta del gasto y el desc.
  //Muestro por consola el monto final
  console.log("Usted paga con descuento, su monto final es:", montofinal);
  //Le muestro al usuario el monto final
  alert("Usted paga con descuento, su monto final es:" + montofinal);
} else {
  //Si es false
  //Muestro por consola que no tiene descuento y el monto a pagar
  console.log("No tiene descuento, su monto final es:", gasto);
  //Muestro al usuario que no tiene descuento y el monto a pagar
  alert("No tiene descuento, su monto final es:" + gasto);
}
