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
exports.PhoneWithRadio = void 0;
var phone_1 = require("./phone");
var PhoneWithRadio = /** @class */ (function (_super) {
    __extends(PhoneWithRadio, _super);
    //CONSTRUCTOR
    function PhoneWithRadio() {
        var _this = _super.call(this) || this;
        _this.frequency = 105;
        return _this;
    }
    //GETTERS AND SETTERS
    PhoneWithRadio.prototype.getFrequency = function () {
        return this.frequency;
    };
    //SPECIFIC METHODS
    PhoneWithRadio.prototype.changeFrequency = function (frequency) {
        if (this.getIsOn()) {
            this.frequency = frequency;
        }
    };
    return PhoneWithRadio;
}(phone_1.Phone));
exports.PhoneWithRadio = PhoneWithRadio;
