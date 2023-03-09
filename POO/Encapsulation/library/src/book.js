"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //CONSTRUCTOR
    function Book(title, author, genere) {
        this.section = Math.floor(Math.random() * 100);
        this.shelf = Math.floor(Math.random() * 100);
        this.title = title;
        this.author = author;
        this.genere = genere;
        this.availability = true;
    }
    //GETTERS AND SETTERS
    Book.prototype.setTitle = function (title) { this.title = title; };
    Book.prototype.getTitle = function () { return this.title; };
    Book.prototype.setAuthor = function (author) { this.author = author; };
    Book.prototype.getAuthor = function () { return this.author; };
    Book.prototype.setGenere = function (genere) { this.genere = genere; };
    Book.prototype.getGenere = function () { return this.genere; };
    Book.prototype.setAvailability = function (availability) { this.availability = availability; };
    Book.prototype.getAvailability = function () { return this.availability; };
    return Book;
}());
exports.Book = Book;
