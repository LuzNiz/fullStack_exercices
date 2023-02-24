"use strict";
exports.__esModule = true;
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    //CONSTRUCTOR
    function Electrodomestico(type, marca, price, color, energyConsumption, weight) {
        this.type = type;
        this.marca = marca;
        this.price = price;
        this.color = color;
        this.energyConsumption = energyConsumption;
        this.weight = weight;
    }
    //SET and GET of the type 
    Electrodomestico.prototype.setType = function (type) {
        this.type = type;
    };
    Electrodomestico.prototype.getType = function () {
        return this.type;
    };
    Electrodomestico.prototype.setMarca = function (marca) {
        this.type = marca;
    };
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    //SET and GET of the price
    Electrodomestico.prototype.setPrice = function (price) {
        this.price = price;
    };
    Electrodomestico.prototype.getPrice = function () {
        return this.price;
    };
    //SET and GET of the color
    Electrodomestico.prototype.setColor = function (color) {
        this.color = color;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    //SET and GET of energy consumption
    Electrodomestico.prototype.setEnergyConsumption = function (energy) {
        this.energyConsumption = energy;
    };
    Electrodomestico.prototype.getEnergyConsumption = function () {
        return this.energyConsumption;
    };
    //SET and GET of weight
    Electrodomestico.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Electrodomestico.prototype.getWeight = function () {
        return this.weight;
    };
    //methods 
    Electrodomestico.prototype.lowConsumption = function () {
        if (this.energyConsumption < 1500) {
            return true;
        }
        else {
            return false;
        }
    };
    Electrodomestico.prototype.calcularBalance = function () {
        return this.price / this.weight;
    };
    Electrodomestico.prototype.highEnd = function () {
        if (this.calcularBalance() > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
