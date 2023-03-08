"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var partner_1 = require("./partner");
var libros = [];
var socios = [];
var libraryADM = new library_1.Library("LibraryADM", "French 1864", "Las Flores", libros, socios, "2255234124");
libraryADM.showData();
var juanCiancio = libraryADM.newSocio(new partner_1.Partner("Juan", "Ciancio", "342352352", libraryADM, "4124124"));
console.table(juanCiancio);
juanCiancio.setPassword("Juan386");
console.table(juanCiancio.getPassword());
var luzNiz = libraryADM.newSocio(new partner_1.Partner("Luz", "Niz", "40065375", libraryADM, "+54 9 2244 234131"));
luzNiz.setPassword("Luce365");
console.table(luzNiz);
console.log("Hola");
