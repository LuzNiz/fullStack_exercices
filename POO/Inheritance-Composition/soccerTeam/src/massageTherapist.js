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
exports.MassageTherapist = void 0;
var person_1 = require("./person");
var MassageTherapist = /** @class */ (function (_super) {
    __extends(MassageTherapist, _super);
    function MassageTherapist(firstName, lastName, passportNumber, birthday, registrationNumber) {
        var _this = _super.call(this, firstName, lastName, passportNumber, birthday) || this;
        _this.registrationNumber = registrationNumber;
        return _this;
    }
    MassageTherapist.prototype.setRegistrationNumber = function (registrationNumber) {
        this.registrationNumber = registrationNumber;
    };
    MassageTherapist.prototype.getRegistrationNumber = function () {
        return this.registrationNumber;
    };
    MassageTherapist.prototype.introduceYourself = function () {
        return "Hello, my name is ".concat(this.getFirstName, " ").concat(this.getLastName, ". I am the massage therapist of the football team");
    };
    MassageTherapist.prototype.showInfo = function () {
        return this;
    };
    return MassageTherapist;
}(person_1.Person));
exports.MassageTherapist = MassageTherapist;
