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
exports.FootballPlayer = void 0;
var person_1 = require("./person");
var FootballPlayer = /** @class */ (function (_super) {
    __extends(FootballPlayer, _super);
    function FootballPlayer(firstName, lastName, passportNumber, birthday, jerseyNumber) {
        var _this = _super.call(this, firstName, lastName, passportNumber, birthday) || this;
        _this.jerseyNumber = jerseyNumber;
        return _this;
    }
    FootballPlayer.prototype.setJerseyNumber = function (jerseyNumber) {
        this.jerseyNumber = jerseyNumber;
    };
    FootballPlayer.prototype.getJerseyNumber = function () {
        return this.jerseyNumber;
    };
    FootballPlayer.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    FootballPlayer.prototype.getTitular = function () {
        return this.titular;
    };
    FootballPlayer.prototype.introduceYourself = function () {
        return "Hello, my name is ".concat(this.getFirstName(), " ").concat(this.getLastName(), ". I'm the ").concat(this.jerseyNumber, "rd player on this team");
    };
    FootballPlayer.prototype.showInfo = function () {
        return this;
    };
    return FootballPlayer;
}(person_1.Person));
exports.FootballPlayer = FootballPlayer;
