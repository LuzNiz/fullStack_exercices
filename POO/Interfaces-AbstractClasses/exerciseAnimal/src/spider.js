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
exports.Spider = void 0;
var animal_1 = require("./animal");
var Spider = /** @class */ (function (_super) {
    __extends(Spider, _super);
    function Spider(paws) {
        return _super.call(this, paws) || this;
    }
    Spider.prototype.eat = function () {
        console.log("I take care of the planet by eating flies");
    };
    Spider.prototype.walk = function (paws) {
        console.log("With my ".concat(paws, ", walk better"));
    };
    return Spider;
}(animal_1.Animal));
exports.Spider = Spider;
