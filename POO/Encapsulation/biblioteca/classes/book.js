"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //CONSTRUCTOR
    function Book(title, author, genere, disponibilidad) {
        this.id = this.utilClass.generateRandomString(4);
        this.section = Math.floor(Math.random() * 100);
        this.section = Math.floor(Math.random() * 100);
        this.title = title;
        this.author = author;
        this.genere = genere;
        this.disponibilidad = disponibilidad;
    }
    //GETTERS AND SETTERS
    Book.prototype.setTitle = function (title) { this.title = title; };
    Book.prototype.getTitle = function () { return this.title; };
    Book.prototype.setAuthor = function (author) { this.author = author; };
    Book.prototype.getAuthor = function () { return this.author; };
    Book.prototype.setGenere = function (genere) { this.genere = genere; };
    Book.prototype.getGenere = function () { return this.genere; };
    Book.prototype.setDisponibilidad = function (diponibilidad) { this.disponibilidad = this.disponibilidad; };
    Book.prototype.getDisponibilidad = function () { return this.disponibilidad; };
    //OWN METHODS
    Book.prototype.available = function () {
        return false;
    };
    return Book;
}());
exports.Book = Book;
