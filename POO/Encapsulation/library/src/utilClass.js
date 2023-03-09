"use strict";
exports.__esModule = true;
exports.UtilClass = void 0;
var UtilClass = /** @class */ (function () {
    function UtilClass() {
    }
    //AUXILIARY SEARCH METHOD
    UtilClass.prototype.validatePassword = function (password) {
        if (password.length >= 6 && password.match(/[A-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password != "") {
            return true;
        }
        else {
            return false;
        }
    };
    return UtilClass;
}());
exports.UtilClass = UtilClass;
