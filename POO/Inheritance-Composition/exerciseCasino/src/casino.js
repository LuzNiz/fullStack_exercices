"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(casinoName, place, address) {
        this.casinoName = casinoName;
        this.place = place;
        this.address = address;
        this.players = [];
        this.usersConected = 0;
    }
    Casino.prototype.getCasinoName = function () { return this.casinoName; };
    ;
    Casino.prototype.setCasinoName = function (casinoName) { this.casinoName = casinoName; };
    ;
    Casino.prototype.getPlace = function () { return this.place; };
    ;
    Casino.prototype.setPlace = function (place) { this.place = place; };
    ;
    Casino.prototype.getAddress = function () { return this.address; };
    ;
    Casino.prototype.setAddress = function (address) { this.address = address; };
    ;
    Casino.prototype.getPlayers = function () { return this.players; };
    ;
    Casino.prototype.getAmountTokens = function () { return this.amountTokens; };
    ;
    Casino.prototype.getGames = function () { return this.game; };
    ;
    Casino.prototype.getUserConected = function () {
        this.usersConected = this.countUsersConected();
        return this.usersConected;
    };
    ;
    Casino.prototype.buyTokens = function (money, player) {
        var valueToken = 200;
        if (player.getStatus() == true && money > valueToken && money % 100 === 0) {
            var amountTokens = money / valueToken;
            player.setTokens(amountTokens);
        }
        else {
            console.log("You must enter a number greater than ".concat(valueToken, ". The number must be a multiple of 100"));
        }
    };
    ;
    Casino.prototype.setNewUser = function (player) {
        this.players.push(player);
    };
    Casino.prototype.countUsersConected = function () {
        var users = 0;
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].getStatus()) {
                users++;
            }
        }
        return users;
    };
    ;
    return Casino;
}());
exports.Casino = Casino;
