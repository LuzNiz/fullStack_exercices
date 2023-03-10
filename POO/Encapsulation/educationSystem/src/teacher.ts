import { Student } from "./student"
import { Util } from "./util";

export class Teacher {
    private students : Student[];
    private firstName : string;
    private lastName :string;
    private course :string;
    public util :Util;
    

    constructor(students :Student[], firstName :string, lastName :string, course :string){
        this.students = students;
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.util = new Util();
    }

    // GETTERS AND SETTERS
    public setFirstName(firstName :string):void {this.firstName = firstName}
    public getFirstName() :string {return this.firstName};

    public setLastName(lastName :string):void {this.firstName = lastName}
    public getLastName() :string {return this.lastName};

    public setCourse(course :string):void {this.course = course};
    public getCourse() :string {return this.course};

    public setNote (firstName :string, lastName :string, note :number) :void {
        let index = this.util.search(firstName, lastName, undefined, this.students );
        if(index >= 0){
            this.students[index].setNote(note);
        };
    }
}
