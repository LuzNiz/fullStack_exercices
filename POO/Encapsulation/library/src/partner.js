"use strict";
exports.__esModule = true;
exports.Partner = void 0;
var Partner = /** @class */ (function () {
    //CONSTRUCTOR
    function Partner(firstName, lastName, dni, library, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.library = library;
        this.codePartner = Partner.total + 1;
        phone ? this.phone = phone : this.phone = "No Declara";
        Partner.total++;
    }
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
    Partner.prototype.getBiblioteca = function () { return this.library; };
    ;
    Partner.prototype.getCodePartner = function () { return this.codePartner; };
    ;
    Partner.prototype.setPassword = function (password) {
        var validate = this.library.getUtilClass().validatePassword(password);
        if (validate) {
            this.password = password;
        }
        else {
            console.log("Su clave no cumple con los criterios establecidos");
        }
    };
    Partner.prototype.getPassword = function () { return this.password; };
    //SPECIFIC METHODS
    Partner.prototype.checkOutBooks = function (titles) {
        var booksCheckOut = 0;
        for (var count = 0; count <= titles.length; count++) {
            var index = this.library.search(this.library, titles[count]);
            if (index >= 0) {
                var available = this.library.beAvailable(this.library, index);
                if (available) {
                    this.library.getBooks()[index].setAvailability(false);
                    booksCheckOut++;
                }
                ;
            }
        }
        console.log("you have successfully checked out ".concat(booksCheckOut, " books"));
    };
    Partner.prototype.returnBooks = function (library, titles) {
        var booksReturn = 0;
        for (var count = 0; count <= titles.length; count++) {
            var index = this.library.search(library, titles[count]);
            if (index >= 0) {
                var available = this.library.beAvailable(library, index);
                if (!available) {
                    library.getBooks()[index].setAvailability(true);
                    booksReturn++;
                }
            }
        }
        console.log("you have successfully retured out ".concat(booksReturn, " books"));
    };
    Partner.total = 0;
    return Partner;
}());
exports.Partner = Partner;
