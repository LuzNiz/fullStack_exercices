"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(paws) {
        this.paws = paws;
    }
    Animal.prototype.getPaws = function () {
        return this.paws;
    };
    Animal.prototype.setPaws = function (paws) {
        this.paws = paws;
    };
    return Animal;
}());
exports.Animal = Animal;
