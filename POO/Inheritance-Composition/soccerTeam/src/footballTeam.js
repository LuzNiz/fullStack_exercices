"use strict";
exports.__esModule = true;
exports.FootballTeam = void 0;
var FootballTeam = /** @class */ (function () {
    function FootballTeam(name, coach, massageTherapist) {
        this.name = name;
        this.coach = coach;
        this.massageTherapist = massageTherapist;
    }
    FootballTeam.prototype.setName = function (name) {
        this.name = name;
    };
    FootballTeam.prototype.getName = function () {
        return this.name;
    };
    FootballTeam.prototype.getCoach = function () {
        return this.coach;
    };
    FootballTeam.prototype.getMassageTherapist = function () {
        return this.massageTherapist;
    };
    FootballTeam.prototype.showInfo = function () {
        return this;
    };
    return FootballTeam;
}());
exports.FootballTeam = FootballTeam;
