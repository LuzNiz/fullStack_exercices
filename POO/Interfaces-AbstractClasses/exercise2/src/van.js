"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Van = void 0;
var vehicle_1 = require("./vehicle");
var Van = /** @class */ (function (_super) {
    __extends(Van, _super);
    function Van(marca, modelo, anio) {
        return _super.call(this, marca, modelo, anio) || this;
    }
    Van.prototype.speedUp = function () {
        if (this.getIsOn()) {
            this.currentSpeed += 10;
        }
    };
    Van.prototype.showInfo = function () {
        return this;
    };
    return Van;
}(vehicle_1.Vehicle));
exports.Van = Van;
