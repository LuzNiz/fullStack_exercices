export class Student {
    private dni :number;
    private firstName :string;
    private lastName :string;
    private email :string;
    private note :number;
    private calification :string;

    //CONSTRUCTOR
    constructor(dni :number, firstName :string, lastName :string, email?:string){
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        email ? this.email = email : this.email ="No Declara";
        this.note = 0;
        this.calification = " ";
    }

    //GETTERS AND SETTERS
    public setDni(dni :number):void {this.dni = dni}
    public getDni() :number {return this.dni}

    public setFirstName(firstName :string):void {this.firstName = firstName}
    public getFirstName() :string {return this.firstName}

    public setLastName(lastName :string):void {this.firstName = lastName}
    public getLastName() :string {return this.lastName}

    public setNote(note :number):void {this.note = note}
    public getNote() :number {return this.note}

    //OWN METHODS
    public isApproved() :boolean {
        if (this.note >= 7 && this.note <= 10){ //Si la nota es mayor a 7 y menor de 10 está aprobado
            return true;
        }else {
            return false;
        }
    }
    
    public calcCalification() :string {
        if(this.isApproved()){ //Si el metodo arpobado() retorna true
            this.calification = "Aprobado"
            return this.calification //retorna que está aprobado
        }else {
            this.calification = "Desaprobado"
            return this.calification //Retorna que está desaprobado
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
        EMAIL         : ${this.email}
        NOTA          : ${this.note}
        CALIFICACION  : ${this.calcCalification()}
        `)
    }
}
