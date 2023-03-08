"use strict";
exports.__esModule = true;
exports.Partner = void 0;
var utilClass_1 = require("./utilClass");
var Partner = /** @class */ (function () {
    //CONSTRUCTOR
    function Partner(firstName, lastName, dni, biblioteca, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.biblioteca = biblioteca;
        this.utilClass = new utilClass_1.UtilClass();
        this.codePartner = Partner.total + 1;
        phone ? this.phone = phone : this.phone = "No Declara";
        Partner.total++;
    }
    ;
    // GETTERS AND SETTERS
    Partner.prototype.setFirstName = function (firstName) { this.firstName = firstName; };
    ;
    Partner.prototype.getFirstName = function () { return this.firstName; };
    ;
    Partner.prototype.setLastName = function (lastName) { this.lastName = lastName; };
    ;
    Partner.prototype.getLastName = function () { return this.lastName; };
    ;
    Partner.prototype.setDni = function (dni) { this.dni = dni; };
    ;
    Partner.prototype.getDni = function () { return this.dni; };
    ;
    Partner.prototype.setPhone = function (phone) { this.phone = phone; };
    ;
    Partner.prototype.getPhone = function () { return this.phone; };
    ;
    Partner.prototype.getBiblioteca = function () { return this.biblioteca; };
    ;
    Partner.prototype.getCodePartner = function () { return this.codePartner; };
    ;
    Partner.prototype.setPassword = function (password) {
        if (this.utilClass.validatePassword(password)) {
            this.password = password;
        }
        else {
            console.log("Su clave no cumple con los criterios establecidos");
        }
    };
    Partner.prototype.getPassword = function () { return this.password; };
    Partner.total = 0;
    return Partner;
}());
exports.Partner = Partner;
