"use strict";
exports.__esModule = true;
exports.CellPhone = void 0;
var CellPhone = /** @class */ (function () {
    function CellPhone(make, model, battery) {
        this.make = make;
        this.model = model;
        this.simCard = [];
        this.battery = battery;
    }
    CellPhone.prototype.setMake = function (make) {
        this.make = make;
    };
    CellPhone.prototype.getMake = function () {
        return this.make;
    };
    CellPhone.prototype.setModel = function (model) {
        this.model = model;
    };
    CellPhone.prototype.getModel = function () {
        return this.model;
    };
    CellPhone.prototype.getInfo = function () {
        return this;
    };
    CellPhone.prototype.setSimCard = function (simCard) {
        this.simCard.push(simCard);
    };
    CellPhone.prototype.getSimCards = function () {
        return this.simCard;
    };
    CellPhone.prototype.getBattery = function () {
        return this.battery;
    };
    CellPhone.prototype.removeSimCard = function (simCard) {
        var index = this.simCard.findIndex(function (sim) { return sim.getInfo === simCard.getInfo; });
        if (index !== -1) {
            this.simCard.splice(index, 1);
        }
    };
    return CellPhone;
}());
exports.CellPhone = CellPhone;
