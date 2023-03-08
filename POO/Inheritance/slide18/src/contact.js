"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
    Contact.prototype.getFirstName = function () {
        return this.firstName;
    };
    Contact.prototype.getLastName = function () {
        return this.lastName;
    };
    Contact.prototype.getPhoneNumber = function () { return this.phoneNumber; };
    Contact.prototype.editContact = function (firstName, lastName, phone) {
        firstName ? this.firstName = firstName : this.firstName;
        lastName ? this.lastName = lastName : this.lastName;
        phone ? this.phoneNumber = phone : this.phoneNumber;
    };
    return Contact;
}());
exports.Contact = Contact;
