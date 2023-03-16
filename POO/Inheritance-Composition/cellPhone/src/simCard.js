"use strict";
exports.__esModule = true;
exports.SimCard = void 0;
var uuidv4_1 = require("uuidv4");
var SimCard = /** @class */ (function () {
    function SimCard(carrier, number) {
        this.id = (0, uuidv4_1.uuid)();
        this.carrier = carrier;
        this.number = number;
    }
    SimCard.prototype.setCarrier = function (carrier) {
        this.carrier = carrier;
    };
    SimCard.prototype.getCompany = function () {
        return this.carrier;
    };
    SimCard.prototype.setNumber = function (number) {
        this.number = number;
    };
    SimCard.prototype.getNumberPhone = function () {
        return this.number;
    };
    SimCard.prototype.getInfo = function () {
        return this;
    };
    return SimCard;
}());
exports.SimCard = SimCard;
