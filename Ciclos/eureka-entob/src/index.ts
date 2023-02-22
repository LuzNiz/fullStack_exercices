/*
Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa
*/

//Pido al usuario que ingrese el usuario
let userIngresado: string = String(prompt("Ingrese Usuario"));
//Pido al usuario que ingrese la contraseña
let passwordIngresado: string = String(prompt("Ingrese contraseña"));
//Almaceno en una variable el usuario conrrecto
const userBD: string = "Luce";
//Almaceno en una variable la contraseña correcta
const passwordBD: string = "eureka";
//Creo e inicializo la variable contador en 1
let i: number = 1;

//Mientras el contador sea menor o igual a 3 y la contraseña sea distinta a la correcta
while (i <= 3 && passwordIngresado !== passwordBD) {
	//Vuelvo a pedir usuario y contraseña
	userIngresado = String(prompt("Ingrese Usuario"));
	passwordIngresado = String(prompt("Ingrese contraseña"));
	//incremento contador en 1
	i++;
}
//Si el usuario y la contraseña es correcta le digo al usuario que puede ingresar
if (userIngresado === userBD && passwordIngresado === passwordBD) {
	alert("Puede ingresar");
} else {
	// En cambio, si no son correctas le digo que ya no tiene intentos
	alert("Ya no tiene más intentos");
}
