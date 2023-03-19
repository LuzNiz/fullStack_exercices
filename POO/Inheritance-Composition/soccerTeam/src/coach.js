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
exports.Coach = void 0;
var person_1 = require("./person");
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(firstName, lastName, passportNumber, birthday) {
        var _this = _super.call(this, firstName, lastName, passportNumber, birthday) || this;
        _this.footballPlayers = [];
        return _this;
    }
    Coach.prototype.getFootballPlayers = function () {
        return this.footballPlayers;
    };
    Coach.prototype.newFootballPlayer = function (player, titular) {
        player.setTitular(titular);
        this.footballPlayers.push(player);
    };
    Coach.prototype.searchFootballPlayer = function (firstName, lastName) {
        var index = this.footballPlayers.findIndex(function (player) { return player.getFirstName() === firstName &&
            player.getLastName() === lastName; });
        return index;
    };
    Coach.prototype.ifTitular = function (firstName, lastName) {
        var index = this.searchFootballPlayer(firstName, lastName);
        if (index >= 0 && this.footballPlayers[index].getTitular() === true) {
            this.footballPlayers[index].setTitular(false);
            return "the player ".concat(this.footballPlayers[index].getFirstName(), " is a substitute list player");
        }
        else if (index >= 0 && this.footballPlayers[index].getTitular() === false) {
            this.footballPlayers[index].setTitular(true);
            return "the player ".concat(this.footballPlayers[index].getFirstName(), " is a starting roster player");
        }
        else {
            return "Player not found";
        }
    };
    Coach.prototype.introduceYourself = function () {
        return "Hello, my name is ".concat(this.getFirstName(), " ").concat(this.getLastName(), ". I'm the coach of team");
    };
    Coach.prototype.showInfo = function () {
        return this;
    };
    return Coach;
}(person_1.Person));
exports.Coach = Coach;
