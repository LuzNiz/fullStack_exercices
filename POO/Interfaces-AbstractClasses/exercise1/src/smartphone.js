"use strict";
exports.__esModule = true;
exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.contructor = function () {
        this.isOn = false;
    };
    SmartPhone.prototype.getIsOn = function () {
        return this.isOn;
    };
    SmartPhone.prototype.on = function () {
        this.isOn = true;
    };
    SmartPhone.prototype.off = function () {
        this.isOn = false;
    };
    SmartPhone.prototype.call = function (number) {
        console.log("Llamando a ".concat(number, "..."));
    };
    SmartPhone.prototype.takePhoto = function () {
        if (this.isOn) {
            console.log("Taking photograph...");
        }
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
