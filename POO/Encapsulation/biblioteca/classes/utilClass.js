"use strict";
exports.__esModule = true;
exports.UtilClass = void 0;
var UtilClass = /** @class */ (function () {
    function UtilClass() {
    }
    //AUXILIARY SEARCH METHOD
    /*
    public search(title :string):number{
        let index = this.books.findIndex(books => this.books.getTitle() == title);
        if(index >= 0){
            return index;
        }else {
            return -1;
        }
        
    }
    */
    UtilClass.prototype.generateRandomString = function (number) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < number; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };
    UtilClass.prototype.validatePassword = function (password) {
        if (password.length < 6 && password.match(/[A-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password != "") {
            return false;
        }
        else {
            return true;
        }
    };
    return UtilClass;
}());
exports.UtilClass = UtilClass;
