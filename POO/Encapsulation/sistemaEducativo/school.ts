import { Student } from "./student";
import { Teacher } from "./teacher";

export class School {
    private teachers :Teacher[];
    private students :Student[];

    public matricular (student :Student){
        this.students.push(student);
    }

    public expulsar (student :Student) {

    }

    public contratar (teacher :Teacher){

    }

    public despedir (teacher :Teacher) {

    }
}