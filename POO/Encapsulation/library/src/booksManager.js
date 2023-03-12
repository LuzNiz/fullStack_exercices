"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.getBooks = function () { return this.books; };
    ;
    BookManager.prototype.newBook = function (book) {
        this.getBooks().push(book);
        var index = this.search(book.getTitle());
        this.books[index].setAvailability(true);
        return book;
    };
    BookManager.prototype.search = function (title) {
        var index = -1;
        for (var count = 0; count < this.getBooks().length; count++) {
            if (this.getBooks()[count].getTitle() === title) {
                index = count;
            }
        }
        return index;
    };
    BookManager.prototype.beAvailable = function (index) {
        var available = this.getBooks()[index].getAvailability();
        return available;
    };
    BookManager.prototype.consultBook = function (title) {
        var index = this.search(title);
        if (index >= 0) {
            this.getBooks()[index].showData();
        }
    };
    BookManager.prototype.modifyBook = function (titlebook, newTitle, newAuthor, newGenere) {
        var index = this.search(titlebook);
        if (newTitle) {
            this.getBooks()[index].setTitle(newTitle);
        }
        else if (newAuthor) {
            this.getBooks()[index].setAuthor(newAuthor);
        }
        else if (newGenere) {
            this.getBooks()[index].setGenere(newGenere);
        }
    };
    BookManager.prototype.deleteBook = function (title) {
        var index = this.search(title);
        if (index >= 0) {
            this.getBooks().splice(index, 1);
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
