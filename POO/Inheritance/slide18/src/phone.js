"use strict";
exports.__esModule = true;
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    //CONSTRUCTOR
    function Phone() {
        this.isOn = false;
        this.batteryPercentage = 77;
        this.contacts = [];
    }
    //GETTERS AND SETTERS
    Phone.prototype.getIsOn = function () { return this.isOn; };
    Phone.prototype.setBatteryPercentage = function (batteryPercentage) {
        this.batteryPercentage = batteryPercentage;
    };
    Phone.prototype.getBatteryPercentage = function () { return this.batteryPercentage; };
    Phone.prototype.getContacts = function () { return this.contacts; };
    //SPECIFIC METHODS
    Phone.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
    };
    Phone.prototype.lowBattery = function () {
        if (this.getIsOn()) {
            if (this.batteryPercentage === 0) {
                this.switchOnOff();
            }
            else if (this.batteryPercentage >= 1 && this.batteryPercentage <= 5) {
                console.log("Your battery is running low (".concat(this.batteryPercentage, "%) You might want to plug in your\n                Phone"));
            }
            else if (this.batteryPercentage > 5 && this.batteryPercentage >= 19) {
                console.log("Low battery. Your battery is running low (".concat(this.batteryPercentage, "%)"));
            }
        }
    };
    Phone.prototype.newContact = function (contact) {
        this.contacts.push(contact);
        return contact;
    };
    Phone.prototype.search = function (firstName, lastName) {
        var _this = this;
        var index = -1;
        var _loop_1 = function (count) {
            index = this_1.contacts.findIndex(function (Element) { return _this.contacts[count].getFirstName() === firstName
                && _this.contacts[count].getLastName() === lastName; });
            index = count;
            return "break";
        };
        var this_1 = this;
        for (var count = 0; count < this.contacts.length; count++) {
            var state_1 = _loop_1(count);
            if (state_1 === "break")
                break;
        }
        return index;
    };
    Phone.prototype.sendMessage = function (message, firstName, lastName) {
        var indexContact = this.search(firstName, lastName);
        var contactName = this.getContacts()[indexContact].getFirstName();
        var phoneNumber = this.getContacts()[indexContact].getPhoneNumber();
        console.log("\n        TO:  ".concat(contactName, " (").concat((phoneNumber), ")\n        ---------------------------------- \n        MESSAGE:\n        ").concat(message, "\n        "));
    };
    Phone.prototype.makeCall = function (firstName, lastName) {
        var indexContact = this.search(firstName, lastName);
        var contactName = this.getContacts()[indexContact].getFirstName();
        var phoneNumber = this.getContacts()[indexContact].getPhoneNumber();
        console.log("\n                CALLING TO...\n        ------------------------\n            ".concat(contactName, " \n            ").concat((phoneNumber), "\n        ------------------------\n        "));
    };
    return Phone;
}());
exports.Phone = Phone;
