import { CityCar } from "./cityCar";
import { SportsCar } from "./sportsCar";
import { Van } from "./van";

let autoCiudad = new CityCar("Fiat", "F320", 2020);
let autoDeportivo = new SportsCar("Ferrari", "F456", 2022);
let camioneta = new Van("Renault", "Pick Up", 2021);
console.log(autoCiudad.showInfo());
console.log(autoDeportivo.showInfo());
console.log(camioneta.showInfo());

autoCiudad.turnOnOff();
autoDeportivo.turnOnOff();
camioneta.turnOnOff();
autoCiudad.speedUp();
autoDeportivo.speedUp();
camioneta.speedUp();

console.log(autoCiudad.getCurrentSpeed());
console.log(autoDeportivo.getCurrentSpeed());
console.log(camioneta.getCurrentSpeed());
autoCiudad.turnOnOff();
autoDeportivo.turnOnOff();
console.log(autoCiudad.showInfo());
console.log(autoDeportivo.showInfo());
console.log(camioneta.showInfo());