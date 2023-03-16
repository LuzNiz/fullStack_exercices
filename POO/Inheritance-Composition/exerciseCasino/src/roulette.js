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
exports.Roulette = void 0;
var game_1 = require("./game");
var Roulette = /** @class */ (function (_super) {
    __extends(Roulette, _super);
    function Roulette(apuestaMin, cantJugadores, maxNumber) {
        var _this = _super.call(this, apuestaMin, cantJugadores) || this;
        _this.tableNumber = 0;
        _this.maxNumber = maxNumber;
        _this.tableNumber++;
        return _this;
    }
    Roulette.prototype.setNumMesaRuleta = function (numMesaRuleta) { this.tableNumber = numMesaRuleta; };
    ;
    Roulette.prototype.getNumMesaRuleta = function () { return this.tableNumber; };
    ;
    Roulette.prototype.setmaxNumber = function (maxNumber) { this.maxNumber = maxNumber; };
    ;
    Roulette.prototype.getmaxNumber = function () { return this.maxNumber; };
    ;
    Roulette.prototype.spinRoulette = function () {
        var winnerNumber = Math.floor(Math.random() * this.maxNumber);
        return "The winner number's ".concat(winnerNumber);
    };
    return Roulette;
}(game_1.Game));
exports.Roulette = Roulette;
