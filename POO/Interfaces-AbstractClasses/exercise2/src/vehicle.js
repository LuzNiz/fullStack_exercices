"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
        this.on = false;
    }
    Vehicle.prototype.turnOnOff = function () {
        this.on = !this.on;
    };
    Vehicle.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicle.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getIsOn = function () {
        return this.on;
    };
    Vehicle.prototype.getCurrentSpeed = function () {
        return this.currentSpeed;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
