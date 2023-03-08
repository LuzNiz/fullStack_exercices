"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    //CONSTRUCTOR
    function Library(name, address, place, books, partners, phone) {
        this.name = name;
        this.address = address;
        this.place = place;
        this.books = books;
        this.partners = partners;
        phone ? this.phone = phone : this.phone = "No data";
    }
    //GETTERS AND SETTERS
    Library.prototype.setName = function (name) { this.name = name; };
    ;
    Library.prototype.getName = function () { return this.name; };
    ;
    Library.prototype.setAdress = function (address) { this.address = address; };
    ;
    Library.prototype.getAdress = function () { return this.address; };
    ;
    Library.prototype.setPhone = function (phone) { this.phone = phone; };
    ;
    Library.prototype.getPhone = function () { return this.phone; };
    ;
    Library.prototype.setPlace = function (place) { this.place = place; };
    ;
    Library.prototype.getPlace = function () { return this.place; };
    ;
    //SPECIFIC METHODS
    Library.prototype.newSocio = function (socio) {
        this.partners.push(socio);
        return socio;
    };
    Library.prototype.newBook = function (book) {
        this.books.push(book);
        return book;
    };
    Library.prototype.showData = function () {
        console.log("\n        -------------------------------------\n            NAME           : ".concat(this.name, "\n            ADDRESS        : ").concat(this.address, "\n            PHONE          : ").concat(this.phone, "\n            PLACE          : ").concat(this.place, "   \n        -------------------------------------\n        "));
    };
    return Library;
}());
exports.Library = Library;
