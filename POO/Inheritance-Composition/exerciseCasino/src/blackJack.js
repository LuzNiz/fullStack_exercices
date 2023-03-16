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
exports.Blackjack = void 0;
var game_1 = require("./game");
var Blackjack = /** @class */ (function (_super) {
    __extends(Blackjack, _super);
    function Blackjack(apuestaMin, cantJugadores, cantDeCartas, numMesaBlackJack) {
        var _this = _super.call(this, apuestaMin, cantJugadores) || this;
        _this.numberOfCards = cantDeCartas;
        _this.numMesaBlackJack = numMesaBlackJack;
        return _this;
    }
    Blackjack.prototype.getCantDeCartas = function () { return this.numberOfCards; };
    ;
    Blackjack.prototype.setCantDeCartas = function (numberOfCards) { this.numberOfCards = numberOfCards; };
    ;
    Blackjack.prototype.getNumMesaBlackJack = function () { return this.numMesaBlackJack; };
    ;
    Blackjack.prototype.setNumMesaBlackJack = function (numMesaBlackJack) { this.numMesaBlackJack = numMesaBlackJack; };
    ;
    Blackjack.prototype.dealCards = function () {
        var maxCardPlayer = Math.floor(this.numberOfCards / this.maxPlayers);
        if (this.numberOfCards > 0) {
            this.numberOfCards = this.numberOfCards - maxCardPlayer;
        }
        return "Dealing of cards finished. ".concat(this.numberOfCards, " cards remain");
    };
    return Blackjack;
}(game_1.Game));
exports.Blackjack = Blackjack;
