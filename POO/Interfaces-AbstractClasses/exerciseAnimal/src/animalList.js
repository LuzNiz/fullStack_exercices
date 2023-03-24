"use strict";
exports.__esModule = true;
exports.AnimalList = void 0;
var AnimalList = /** @class */ (function () {
    function AnimalList() {
        this.animals = [];
    }
    AnimalList.prototype.showInfo = function () {
        return this.animals;
    };
    AnimalList.prototype.search = function (animal) {
        var aux = false;
        if (this.animals.find(function (element) { return element = animal; })) {
            aux = true;
        }
        return aux;
    };
    AnimalList.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    AnimalList.prototype.deleteAnimal = function (animal) {
        if (this.search(animal)) {
            var index = this.animals.findIndex(function (element) { return element = animal; });
            this.animals.splice(index, 1);
        }
    };
    return AnimalList;
}());
exports.AnimalList = AnimalList;
