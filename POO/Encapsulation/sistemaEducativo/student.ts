export class Student {
    private dni :number;
    private firstName :string;
    private lastName :string;
    private email :string;
    private note :number;

    constructor(dni :number, firstName :string, lastName :string, email?:string){
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        email ? this.email = email : this.email ="No Declara";
    }

    //GETTERS AND SETTERS
    public setDni(dni :number):void {
        this.dni = dni;
    }
    public getDni() :number {
        return this.dni;
    }

    public setFirstName(firstName :string):void {
        this.firstName = firstName;
    }
    public getFirstName() :string {
        return this.firstName;
    }

    public setLastName(lastName :string):void {
        this.firstName = lastName;
    }
    public getLastName() :string {
        return this.lastName;
    }

    public setNote(note :number):void {
        this.note = note;
    }

    public getNote() :number {
        return this.note;
    }

    public aprobado() :boolean {
        if (this.note >= 7 && this.note <= 10){
            return true;
        }else {
            return false;
        }
    }

    public calificacion() :string {
        if(this.aprobado()){
            return `El alumno está aprobado con ${this.note}`
        }else {
            return `El alumno está desaprobado con ${this.note}`
        }
    }
    
    public showData() :void {
        console.log(`
        --------------------
        DATOS DEL Alumno
        --------------------
        DNI           : ${this.dni}
        FIRST NAME    : ${this.firstName}
        LAST NAME     : ${this.lastName}
        `)
    }
}
