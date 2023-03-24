"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cat = void 0;
var animal_1 = require("./animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, paws) {
        var _this = _super.call(this, paws) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.eat = function () {
        console.log("I like Sushi");
    };
    Cat.prototype.play = function (name) {
        console.log("My name is ".concat(name, ", I want to play with the ball"));
    };
    Cat.prototype.walk = function (paws) {
        console.log("I walk with my ".concat(paws, " paws"));
    };
    Cat.prototype.getName = function () {
        return this.name;
    };
    Cat.prototype.setName = function (name) {
        this.name = name;
    };
    return Cat;
}(animal_1.Animal));
exports.Cat = Cat;
