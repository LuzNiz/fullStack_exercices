"use strict";
exports.__esModule = true;
var electrodomestico_1 = require("./electrodomestico");
var electrodomesticoUno = new electrodomestico_1.Electrodomestico("Heladera", "Samsung", 40000, "White", 1500, 30);
var electrodomesticoDos = new electrodomestico_1.Electrodomestico("Heladera", "LG", 30000, "Grey", 1300, 20);
var electrodomesticoTres = new electrodomestico_1.Electrodomestico("Cafetera", "Philips", 8000, "Black", 500, 3);
var electrodomesticoCuatro = new electrodomestico_1.Electrodomestico("Cafetera", "Nescafe", 5000, "White", 800, 2.5);
console.log(electrodomesticoUno);
console.log("".concat(electrodomesticoUno.getType(), " ").concat(electrodomesticoUno.getMarca(), " Color ").concat(electrodomesticoUno.getColor(), " \n$  ").concat(electrodomesticoUno.getPrice()));
electrodomesticoDos.setColor("Grey");
electrodomesticoDos.setPrice(35000);
console.log("".concat(electrodomesticoDos.getType(), " ").concat(electrodomesticoDos.getMarca(), " Color ").concat(electrodomesticoDos.getColor(), "\n$ ").concat(electrodomesticoDos.getPrice()));
console.log("".concat(electrodomesticoTres.getType(), " ").concat(electrodomesticoTres.getMarca(), " Color ").concat(electrodomesticoTres.getColor(), "\n$ ").concat(electrodomesticoTres.getPrice()));
console.log("".concat(electrodomesticoCuatro.getType(), " ").concat(electrodomesticoCuatro.getMarca(), " Color ").concat(electrodomesticoCuatro.getColor(), "\n$ ").concat(electrodomesticoCuatro.getPrice()));
console.log("El balance de ".concat(electrodomesticoUno.getType(), " ").concat(electrodomesticoUno.getMarca(), " es ").concat(electrodomesticoUno.calcularBalance()));
console.log("El balance de ".concat(electrodomesticoDos.getType(), " ").concat(electrodomesticoDos.getMarca(), " es ").concat(electrodomesticoDos.calcularBalance()));
