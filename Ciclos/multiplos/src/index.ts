/* Cree un algoritmo que visualice los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
• Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo
• En dichos casos, solamente indique el número una vez
*/

let cadena: string = ""; // Declaro la variable que contendrá los múltiplos
let i: number; //Declaro la variable contador

for (i = 1; i <= 100; i++) {
	//Inicio ciclo for, con el contador en 1, la condición si el contador es menor o igual a 100
	if (i % 2 === 0 || i % 3 === 0) {
		// Evalúo si el contador es divisible por dos o por 3
		cadena = cadena + i + " "; //Si es true cadena va a ser igual al valor de cadena más el valor del contador (i)
	}
}
//Muestro por consola los múltiplos de 2 y de 3
console.log(cadena);
