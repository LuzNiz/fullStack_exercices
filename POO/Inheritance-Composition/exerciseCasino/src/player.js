"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = email;
        this.password = password;
        this.status = false;
        this.amountTokens = 0;
    }
    Player.prototype.getFirstName = function () { return this.firstName; };
    ;
    Player.prototype.setFirstName = function (firstName) { this.firstName = firstName; };
    ;
    Player.prototype.getLasttName = function () { return this.lastName; };
    ;
    Player.prototype.setLastName = function (lastName) { this.lastName = lastName; };
    ;
    Player.prototype.getEmail = function () { return this.mail; };
    ;
    Player.prototype.setEmail = function (email) { this.mail = email; };
    ;
    Player.prototype.getStatus = function () { return this.status; };
    ;
    Player.prototype.setTokens = function (tokens) { this.amountTokens = tokens; };
    ;
    Player.prototype.getTokens = function () { return this.amountTokens; };
    ;
    Player.prototype.signIn = function (mail, password) {
        if (mail == this.mail && password === this.password) {
            console.log("Successful login. Welcome ".concat(this.firstName));
            this.status = !this.status;
        }
        else {
            console.log("Incorrect email and password, enter again");
        }
    };
    Player.prototype.signOut = function () {
        this.status = !this.status;
        console.log("You have successfully logged out");
    };
    return Player;
}());
exports.Player = Player;
