"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var school_1 = require("./school");
//DECLARO LOS ARRAYS QUE CONTENDRÁN LOS DATOS DE CADA ALUMNO
var gradeOne = [];
var gradeSecond = [];
var gradeThird = [];
//DECLARO EL LISTADO DE PROFESORES Y LA ESCUELA
var teachersPrimary = [];
var school0001 = new school_1.School(teachersPrimary);
//MATRICULO 3 ALUMNOS ----> DOS DE 1ER GRADO Y 1 DE 3ER GRADO
var luzNiz = school0001.enroll(new student_1.Student(40065375, "Luz", "Niz", "luzniz37@gmail.com"), gradeOne);
var johnLorens = school0001.enroll(new student_1.Student(40065375, "John", "Lorens"), gradeOne);
var CaroHeins = school0001.enroll(new student_1.Student(40065375, "Carolina", "Heins", "caro@outlook.com"), gradeThird);
//CONTRATO A 3 DOCENTES
var giovanniDiMarco = school0001.hire(new teacher_1.Teacher(gradeOne, "Giovanni", "Di Marco", "gradeOne"), teachersPrimary);
var marcoLopez = school0001.hire(new teacher_1.Teacher(gradeSecond, "Marco", "Lopez", "gradeSecond"), teachersPrimary);
var SabrinaHeins = school0001.hire(new teacher_1.Teacher(gradeThird, "Sabrina", "Heins", "gradeThird"), teachersPrimary);
//MUESTRO POR CONSOLA EL LISTADO DE MAESTROS
console.table(teachersPrimary);
//DESPIDO A UN DOCENTE
school0001.dismiss("Sabrina", "Heins", teachersPrimary);
//CONTRATO UN NUEVO DOCENTE
var samuelSantos = school0001.hire(new teacher_1.Teacher(gradeThird, "Samuel", "Santos", "gradeThird"), teachersPrimary);
//MUESTRO LA LISTA FINAL DE DOCENTES
console.table(teachersPrimary);
//EXPULSO A UN ALUMNO
school0001.expel("John", "Lorens", gradeOne);
//ASIGNO LAS NOTAS A UN DOS ALUMNOS
giovanniDiMarco.setNote("Luz", "Niz", 9);
samuelSantos.setNote("Carolina", "Heins", 7);
//MUESTRO POR CONSOLA LOS ALUMNOS Y SUS NOTAS, DEPENDIENDO DEL GRUPO
console.table(gradeOne);
console.table(gradeThird);
luzNiz.showData();
