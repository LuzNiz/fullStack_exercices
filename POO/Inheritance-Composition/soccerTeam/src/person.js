"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, passportNumber, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.passportNumber = passportNumber;
        this.birthday = birthday;
    }
    //GETTERS
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getPassportNumber = function () {
        return this.passportNumber;
    };
    Person.prototype.getBirthday = function () {
        return this.birthday;
    };
    //SETTERS
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.setPassportNumber = function (passportNumber) {
        this.passportNumber = passportNumber;
    };
    Person.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Person.prototype.introduceYourself = function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.showInfo = function () {
        return this;
    };
    return Person;
}());
exports.Person = Person;
