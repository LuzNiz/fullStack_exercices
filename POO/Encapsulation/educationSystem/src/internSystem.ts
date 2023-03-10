import { Student } from "./student";
import { Teacher } from "./teacher";
import { School } from "./school";

//DECLARO LOS ARRAYS QUE CONTENDRÁN LOS DATOS DE CADA ALUMNO
const gradeOne :Student[] = [];
const gradeSecond :Student[] = [];
const gradeThird :Student[] = [];

//DECLARO EL LISTADO DE PROFESORES Y LA ESCUELA
let teachersPrimary :Teacher[] = [];
let school0001 :School = new School(teachersPrimary);

//MATRICULO 3 ALUMNOS ----> DOS DE 1ER GRADO Y 1 DE 3ER GRADO
const luzNiz :Student = school0001.enroll(new Student(40065375, "Luz", "Niz", "luzniz37@gmail.com"), gradeOne);
const johnLorens :Student = school0001.enroll(new Student(40065375, "John", "Lorens"), gradeOne);
const CaroHeins :Student = school0001.enroll(new Student(40065375, "Carolina", "Heins", "caro@outlook.com"), gradeThird);

//CONTRATO A 3 DOCENTES
const giovanniDiMarco :Teacher = school0001.hire(new Teacher(gradeOne,"Giovanni", "Di Marco","gradeOne"), teachersPrimary);
const marcoLopez :Teacher =school0001.hire(new Teacher(gradeSecond,"Marco", "Lopez","gradeSecond"), teachersPrimary);
const SabrinaHeins :Teacher =school0001.hire(new Teacher(gradeThird,"Sabrina", "Heins","gradeThird"), teachersPrimary);

//MUESTRO POR CONSOLA EL LISTADO DE MAESTROS
console.table(teachersPrimary);

//DESPIDO A UN DOCENTE
school0001.dismiss("Sabrina", "Heins", teachersPrimary);

//CONTRATO UN NUEVO DOCENTE
const samuelSantos :Teacher = school0001.hire(new Teacher(gradeThird,"Samuel", "Santos","gradeThird"), teachersPrimary);

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

luzNiz.showData()


