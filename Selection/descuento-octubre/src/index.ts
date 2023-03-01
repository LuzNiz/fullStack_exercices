/*
Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario y cantidad el mes indicados por
el usuario, determine si el cliente tiene
descuento o no
*/

let precioUnitario: number = Number(prompt("Ingrese precio unitario"));
let cantidad: number = Number(prompt("Ingrese cantidad comprada"));
let mesDeCompra: string = String(prompt("Ingrese mes de compra"));
let montofinal: number;
let descuento: number = (precioUnitario * cantidad * 15) / 100;

if (mesDeCompra === "Octubre" || mesDeCompra === "octubre") {
	montofinal = precioUnitario * cantidad - descuento;
	console.log("Usted tiene descuento. El precio final es de: $" + montofinal);
	alert("Usted tiene descuento. El precio final es de: $" + montofinal);
} else {
	montofinal = precioUnitario * cantidad;
	console.log(
		"Usted no tiene descuento. El precio final es de: $" + montofinal
	);
	alert("Usted no tiene descuento. El precio final es de: $" + montofinal);
}
