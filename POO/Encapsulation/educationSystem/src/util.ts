import { School } from "./school";
import { Student } from "./student";
import { Teacher } from "./teacher";

export class Util {

    public search(firstName :string, lastName :string, teachersList? :Teacher[], studentsList? :Student[]):number{
        if(teachersList){
            let index = teachersList.findIndex(teachersList => teachersList.getFirstName() == firstName 
                && teachersList.getLastName() == lastName);
                return index;
        }else if (studentsList){
            let index = studentsList.findIndex(studentsList => studentsList.getFirstName() == firstName 
                && studentsList.getLastName() == lastName);
                return index;
        }
        return -1;
    }
}