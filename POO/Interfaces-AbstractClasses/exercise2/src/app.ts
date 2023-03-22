import { AutoCiudad } from "./autoCiudad";
import { AutoDeportivo } from "./autoDeportivo";
import { Camioneta } from "./camioneta";

let autoCiudad = new AutoCiudad("Fiat", "F320", 2020);
let autoDeportivo = new AutoDeportivo("Ferrari", "F456", 2022);
let camioneta = new Camioneta("Renault", "Pick Up", 2021);
console.log(autoCiudad.showInfo());
console.log(autoDeportivo.showInfo());
console.log(camioneta.showInfo());

autoCiudad.prender();
autoDeportivo.prender();
camioneta.prender();
autoCiudad.acelerar();
autoDeportivo.acelerar();
camioneta.acelerar();

console.log(autoCiudad.getVelocidadActual());
console.log(autoDeportivo.getVelocidadActual());
console.log(camioneta.getVelocidadActual());