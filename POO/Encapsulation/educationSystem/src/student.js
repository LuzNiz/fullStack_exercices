"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    //CONSTRUCTOR
    function Student(dni, firstName, lastName, email) {
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        email ? this.email = email : this.email = "No Declara";
        this.note = 0;
        this.calification = " ";
    }
    //GETTERS AND SETTERS
    Student.prototype.setDni = function (dni) { this.dni = dni; };
    Student.prototype.getDni = function () { return this.dni; };
    Student.prototype.setFirstName = function (firstName) { this.firstName = firstName; };
    Student.prototype.getFirstName = function () { return this.firstName; };
    Student.prototype.setLastName = function (lastName) { this.firstName = lastName; };
    Student.prototype.getLastName = function () { return this.lastName; };
    Student.prototype.setNote = function (note) { this.note = note; };
    Student.prototype.getNote = function () { return this.note; };
    //OWN METHODS
    Student.prototype.aprobado = function () {
        if (this.note >= 7 && this.note <= 10) { //Si la nota es mayor a 7 y menor de 10 está aprobado
            return true;
        }
        else {
            return false;
        }
    };
    Student.prototype.calificacion = function () {
        if (this.aprobado()) { //Si el metodo arpobado() retorna true
            this.calification = "Aprobado";
            return this.calification; //retorna que está aprobado
        }
        else {
            this.calification = "Desaprobado";
            return this.calification; //Retorna que está desaprobado
        }
    };
    Student.prototype.showData = function () {
        console.log("\n        --------------------\n        DATOS DEL Alumno\n        --------------------\n        DNI           : ".concat(this.dni, "\n        FIRST NAME    : ").concat(this.firstName, "\n        LAST NAME     : ").concat(this.lastName, "\n        EMAIL         : ").concat(this.email, "\n        NOTA          : ").concat(this.note, "\n        CALIFICACION  : ").concat(this.calificacion(), "\n        "));
    };
    return Student;
}());
exports.Student = Student;
