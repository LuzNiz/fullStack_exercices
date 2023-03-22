"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, year) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getYear = function () {
        return this.year;
    };
    Vehiculo.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
