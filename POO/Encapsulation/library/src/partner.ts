import { Library } from "./library";
import { UtilClass } from "./utilClass";
import { Book } from "./book";

export class Partner {
    private firstName :string;
    private lastName :string;
    private dni :string;
    private phone :string;
    public library : Library;
    private codePartner :number;
    private password :string;
    private static total :number = 0;

    //CONSTRUCTOR
    public constructor(firstName :string, lastName :string, dni :string, library :Library, phone? :string, ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.library = library;
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

    public getBiblioteca() :Library{return this.library};

    public getCodePartner() : number{return this.codePartner};

    public setPassword(password: string) :void {
        let validate: boolean = this.library.getUtilClass().validatePassword(password);
        if(validate){
            this.password = password;
        } else {
            console.log("Su clave no cumple con los criterios establecidos");
        }
    }

    public getPassword() :string {return this.password}

    //SPECIFIC METHODS
    public checkOutBooks (titles: string[]): void{
        let booksCheckOut :number = 0;
        for(let count = 0; count <= titles.length; count++){
            let index: number = this.library.getBookManager().search(titles[count]);
            if(index >= 0) {
                let available: boolean = this.library.getBookManager().beAvailable(index);
                if(available){
                    this.library.getBookManager().getBooks()[index].setAvailability(false);
                    booksCheckOut ++;
                };
            }
        }
        console.log(`you have successfully checked out ${booksCheckOut} books`);
    }

    public returnBooks(library :Library, titles: string[]): void {
        let booksReturn : number = 0;
        for(let count = 0; count <= titles.length; count++){
            let index: number = this.library.getBookManager().search(titles[count]);
            if(index >= 0) {
                let available: boolean = this.library.getBookManager().beAvailable(index);
                if(available === false){
                    this.library.getBookManager().getBooks()[index].setAvailability(true);
                    booksReturn ++;
                }
            }
        }
        console.log(`you have successfully retured out ${booksReturn} books`);
    }
}