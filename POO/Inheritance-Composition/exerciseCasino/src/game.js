"use strict";
exports.__esModule = true;
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(apuestaMin, cantJugadores) {
        this.minimunBet = apuestaMin;
        this.maxPlayers = cantJugadores;
    }
    Game.prototype.setApuestaMin = function (minimunBet) { this.minimunBet = minimunBet; };
    ;
    Game.prototype.getApuestaMin = function () { return this.minimunBet; };
    ;
    Game.prototype.setcantMaxJugadores = function (maxPlayers) { this.maxPlayers = maxPlayers; };
    ;
    Game.prototype.getcantMaxJugadores = function () { return this.maxPlayers; };
    ;
    return Game;
}());
exports.Game = Game;
