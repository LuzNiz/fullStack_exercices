/*
Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto después de aplicarle un descuento
El precio inicial del producto es $450,50
El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
El precio y el descuento deben ser guardados en variables (no ingresados por teclado)
*/

//OPCION 1
//let precioInicial :number = 450.5; //Establesco en una variable el precio del producto
//let descuento :number = precioInicial * 0.1; // Establesco el valor a descontar en una variable
//let precioFinal :number = precioInicial - descuento; // Resto el precio y el valor a descontar y lo coloco en una variable

//OPCION 2
let precioInicial: number = 450.5; //Establesco en una variable el precio del producto
let precioFinal: number = precioInicial * 0.9; // Establesco el valor con descuento en una variable

console.log("El precio final es: $", precioFinal); //Muestro el precio con descuento por consola
