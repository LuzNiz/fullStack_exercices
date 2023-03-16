"use strict";
exports.__esModule = true;
exports.Battery = void 0;
var Battery = /** @class */ (function () {
    function Battery(capacity, make, model) {
        this.capacity = capacity;
        this.make = make;
        this.model = model;
    }
    Battery.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
    };
    Battery.prototype.getCapacity = function () {
        return this.capacity;
    };
    Battery.prototype.setMake = function (make) {
        this.make = make;
    };
    Battery.prototype.getMake = function () {
        return this.make;
    };
    Battery.prototype.setModel = function (model) {
        this.model = model;
    };
    Battery.prototype.getModel = function () {
        return this.model;
    };
    Battery.prototype.getInfo = function () {
        return this;
    };
    return Battery;
}());
exports.Battery = Battery;
