"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var util_1 = require("./util");
var Teacher = /** @class */ (function () {
    function Teacher(students, firstName, lastName, course) {
        this.students = students;
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.util = new util_1.Util();
    }
    // GETTERS AND SETTERS
    Teacher.prototype.setFirstName = function (firstName) { this.firstName = firstName; };
    Teacher.prototype.getFirstName = function () { return this.firstName; };
    ;
    Teacher.prototype.setLastName = function (lastName) { this.firstName = lastName; };
    Teacher.prototype.getLastName = function () { return this.lastName; };
    ;
    Teacher.prototype.setCourse = function (course) { this.course = course; };
    ;
    Teacher.prototype.getCourse = function () { return this.course; };
    ;
    Teacher.prototype.setNote = function (firstName, lastName, note) {
        var index = this.util.search(firstName, lastName, undefined, this.students);
        if (index >= 0) {
            this.students[index].setNote(note);
        }
        ;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
