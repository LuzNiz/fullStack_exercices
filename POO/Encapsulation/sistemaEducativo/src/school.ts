import { Student } from "./student";
import { Teacher } from "./teacher";
import { Util } from "./util";

export class School {
    private teachersList :Teacher[];
    private studentsList :Student[];
    public util :Util;

    //CONSTRUCTOR
    constructor(teachersList :Teacher[]){
        this.teachersList = teachersList;
        this.studentsList = [];
        this.util = new Util();
    }
    //FUNCION PARA MATRICULAR
    public enroll (student :Student, studentsList :Student[]) :Student{
        studentsList.push(student); //Cargo al último lugar del array pasado como parametro, el estudiante.
        return student; //Retorno el estudiante
    }
    //FUNCIÓN PARA EXPULSAR
    public expel (firstName :string, lastName :string , student :Student []) {
        let index = this.util.search(firstName, lastName, undefined, student ); //---> Método search de class util
        if(index >= 0){ //Si el indice retornado por el método Search es mayor a 0
            student.splice(index,1); //Quita la instacia del array
        };
    }
    //FUNCIÓN PARA CONTRATAR
    public hire (teacher :Teacher, teachersList :Teacher[]) :Teacher{
        teachersList.push(teacher); //Cargo al último lugar del array pasado como parametro, el docente.
        return teacher; //Retorno el docente
    }

    public dismiss (firstName :string, lastName :string, teachersList :Teacher[]):void {
        let index = this.util.search(firstName, lastName, teachersList, undefined );//---> Método search de class util
        if(index >= 0){ //Si el indice retornado por el método Search es mayor a 0
            teachersList.splice(index,1); //Quita la instacia del array
        };
    }
}