/*
Cuando llegamos a la parada, miramos si el colectivo arribó a la parada
Siempre tenemos que esperar antes de que llegue

*/
import "./styles.css";

let llegadaColectivo: string;
console.log("Esperando el colectivo");

llegadaColectivo = String(prompt("¿Llegó el colectivo? S/N"));

while (llegadaColectivo !== "S") {
	alert("Sigo esperando el colectivo");
	console.log("Sigo esperando el colectivo");
	llegadaColectivo = String(prompt("¿Llegó el colectivo? S/N"));
}
alert("Llegó el colectivo");
console.log("Llegó el colectivo");
