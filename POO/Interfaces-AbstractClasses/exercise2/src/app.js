"use strict";
exports.__esModule = true;
var cityCar_1 = require("./cityCar");
var sportsCar_1 = require("./sportsCar");
var van_1 = require("./van");
var autoCiudad = new cityCar_1.CityCar("Fiat", "F320", 2020);
var autoDeportivo = new sportsCar_1.SportsCar("Ferrari", "F456", 2022);
var camioneta = new van_1.Van("Renault", "Pick Up", 2021);
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
