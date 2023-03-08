import { Library } from "./library";
import { UtilClass } from "./utilClass";
import { Book } from "./book";

export class Partner {
    private firstName :string;
    private lastName :string;
    private dni :string;
    private phone :string;
    public biblioteca : Library;
    private codePartner :number;
    private password :string;
    public utilClass :UtilClass;
    private static total :number = 0;

    //CONSTRUCTOR
    public constructor(firstName :string, lastName :string, dni :string, biblioteca :Library, phone? :string, ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.biblioteca = biblioteca;
        this.utilClass = new UtilClass();
        this.codePartner = Partner.total +1;
        phone ? this.phone = phone : this.phone = "No Declara";
        Partner.total++;

    }

    // GETTERS AND SETTERS
    public setFirstName(firstName :string) :void{ this.firstName = firstName};
    public getFirstName() :string{ return this.firstName};

    public setLastName(lastName :string) :void{ this.lastName = lastName};
    public getLastName() :string{return this.lastName};

    public setDni(dni :string) :void{ this.dni = dni};
    public getDni() :string{return this.dni};

    public setPhone(phone :string) :void{ this.phone = phone};
    public getPhone() :string{return this.phone};

    public getBiblioteca() :Library{return this.biblioteca};

    public getCodePartner() : number{return this.codePartner};

    public setPassword(password :string) :void {
        if(this.utilClass.validatePassword(password)){
            this.password = password;
        }else {
            console.log("Su clave no cumple con los criterios establecidos");
        }
    }

    public getPassword() :string{return this.password}



    public beAvailable(title :string) :boolean{
        let index = this.utilClass.search(title );
        let disponibilidad = this.books[index].getDisponibilidad();
        return disponibilidad;
    }

    public checkOutBook(title :string) {
        let index = this.utilClass.search(title );
        let diponibilidad = this.disponible(title);
        if(diponibilidad == true){ //Si el indice retornado por el método Search es mayor a 0
            this.books[index].setDisponibilidad(false);//Quita la instacia del array
        }else {
            console.log("El libro no se encuentra disponible")
        };
    }

    public returnBook(title) {
        let index = this.search(title );
        let diponibilidad = this.disponible(title);
        if(diponibilidad == false){ //Si el indice retornado por el método Search es mayor a 0
            this.books[index].setDisponibilidad(true);//Quita la instacia del array
        }else {
            console.log("El libro no se encuentra disponible")
        };
    }
    */
}