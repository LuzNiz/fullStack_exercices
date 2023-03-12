"use strict";
exports.__esModule = true;
exports.Library = void 0;
var booksManager_1 = require("./booksManager");
var partner_1 = require("./partner");
var utilClass_1 = require("./utilClass");
var Library = /** @class */ (function () {
    //CONSTRUCTOR
    function Library(libraryName, address, locality, phone) {
        this.libraryName = libraryName;
        this.address = address;
        this.locality = locality;
        this.bookManager = new booksManager_1.BookManager;
        this.partners = [];
        phone ? this.phone = phone : this.phone = "No data";
        this.utilClass = new utilClass_1.UtilClass();
    }
    //GETTERS AND SETTERS
    Library.prototype.setLibraryName = function (libraryName) { this.libraryName = libraryName; };
    ;
    Library.prototype.getLibraryName = function () { return this.libraryName; };
    ;
    Library.prototype.setAddress = function (address) { this.address = address; };
    ;
    Library.prototype.getAddress = function () { return this.address; };
    ;
    Library.prototype.setLocality = function (locality) { this.locality = locality; };
    ;
    Library.prototype.getLocality = function () { return this.locality; };
    ;
    Library.prototype.setPhone = function (phone) { this.phone = phone; };
    ;
    Library.prototype.getPhone = function () { return this.phone; };
    ;
    Library.prototype.getBookManager = function () { return this.bookManager; };
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
    Library.prototype.searchPartner = function (library, dni) {
        var index = -1;
        for (var count = 0; count < library.getPartners().length; count++) {
            if (library.getPartners()[count].getDni() === dni) {
                index = count;
                return index;
            }
        }
        return index;
    };
    Library.prototype.deletePartner = function (library, dni) {
        var index = this.searchPartner(library, dni);
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
