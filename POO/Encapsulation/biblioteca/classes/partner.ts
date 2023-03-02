export class Partner {
    private firstName :string;
    private lastName :string;
    private dni :string;
    private phone :string;

    //CONSTRUCTOR
    public constructor(firstName :string, lastName :string, dni :string, phone? :string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        phone ? this.phone = phone : this.phone = "No Declara";
    }

    // GETTERS AND SETTERS
    public setFirstName(firstName :string) :void{ this.firstName = firstName}
    public getFirstName() :string{ return this.firstName}

    public setLastName(lastName :string) :void{ this.lastName = lastName}
    public getLastName() :string{return this.lastName}

    public setDni(dni :string) :void{ this.dni = dni}
    public getDni() :string{return this.dni}

    public setPhone(phone :string) :void{ this.phone = phone}
    public getPhone() :string{return this.phone}



    public checkOut() :void {}

    public return() {}
}