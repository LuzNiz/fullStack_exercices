"use strict";
exports.__esModule = true;
exports.Library = void 0;
var partner_1 = require("./partner");
var utilClass_1 = require("./utilClass");
var Library = /** @class */ (function () {
    //CONSTRUCTOR
    function Library(libraryName, phone) {
        this.libraryName = libraryName;
        this.books = [];
        this.partners = [];
        phone ? this.phone = phone : this.phone = "No data";
        this.utilClass = new utilClass_1.UtilClass();
    }
    //GETTERS AND SETTERS
    Library.prototype.setName = function (name) { this.libraryName = name; };
    ;
    Library.prototype.getName = function () { return this.libraryName; };
    ;
    Library.prototype.setPhone = function (phone) { this.phone = phone; };
    ;
    Library.prototype.getPhone = function () { return this.phone; };
    ;
    Library.prototype.getBooks = function () { return this.books; };
    Library.prototype.getPartners = function () { return this.partners; };
    Library.prototype.getUtilClass = function () { return this.utilClass; };
    //SPECIFIC METHODS
    Library.prototype.newSocio = function (firstName, lastName, dni, library, password, phone) {
        var passwordValidate = this.utilClass.validatePassword(password);
        if (passwordValidate) {
            var socio = new partner_1.Partner(firstName, lastName, dni, library, phone);
            socio.setPassword(password);
            this.partners.push(socio);
            return socio;
        }
    };
    Library.prototype.newBook = function (library, book) {
        this.getBooks().push(book);
        var index = this.search(library, book.getTitle());
        this.books[index].setAvailability(true);
        return book;
    };
    Library.prototype.search = function (library, title, dni) {
        var index = -1;
        if (title) {
            for (var count = 0; count < library.getBooks().length; count++) {
                if (library.getBooks()[count].getTitle() === title) {
                    index = count;
                    return index;
                }
            }
        }
        else if (dni) {
            for (var count = 0; count < library.getPartners().length; count++) {
                if (library.getPartners()[count].getDni() === dni) {
                    index = count;
                    return index;
                }
            }
        }
        return index;
    };
    Library.prototype.beAvailable = function (library, index) {
        var available = library.getBooks()[index].getAvailability();
        return available;
    };
    Library.prototype.deletePartner = function (library, dni) {
        var index = this.search(library, undefined, dni);
        if (index >= 0) {
            this.getPartners().splice(index, 1);
        }
    };
    Library.prototype.showData = function () {
        console.log("\n        -------------------------------------\n            NAME           : ".concat(this.libraryName, "\n            PHONE          : ").concat(this.phone, "  \n        -------------------------------------\n        "));
    };
    return Library;
}());
exports.Library = Library;
