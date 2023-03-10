"use strict";
exports.__esModule = true;
exports.School = void 0;
var util_1 = require("./util");
var School = /** @class */ (function () {
    //CONSTRUCTOR
    function School(teachersList) {
        this.teachersList = teachersList;
        this.studentsList = [];
        this.util = new util_1.Util();
    }
    //FUNCION PARA MATRICULAR
    School.prototype.enroll = function (student, studentsList) {
        studentsList.push(student); //Cargo al último lugar del array pasado como parametro, el estudiante.
        return student; //Retorno el estudiante
    };
    //FUNCIÓN PARA EXPULSAR
    School.prototype.expel = function (firstName, lastName, student) {
        var index = this.util.search(firstName, lastName, undefined, student); //---> Método search de class util
        if (index >= 0) { //Si el indice retornado por el método Search es mayor a 0
            student.splice(index, 1); //Quita la instacia del array
        }
        ;
    };
    //FUNCIÓN PARA CONTRATAR
    School.prototype.hire = function (teacher, teachersList) {
        teachersList.push(teacher); //Cargo al último lugar del array pasado como parametro, el docente.
        return teacher; //Retorno el docente
    };
    School.prototype.dismiss = function (firstName, lastName, teachersList) {
        var index = this.util.search(firstName, lastName, teachersList, undefined); //---> Método search de class util
        if (index >= 0) { //Si el indice retornado por el método Search es mayor a 0
            teachersList.splice(index, 1); //Quita la instacia del array
        }
        ;
    };
    return School;
}());
exports.School = School;
