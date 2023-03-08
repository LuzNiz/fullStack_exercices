import { Book } from "./book";
import { Partner } from "./partner";
import { UtilClass } from "./utilClass";

export class Library {
    private name : string;
    private address :string;
    private phone :string;
    private place :string;
    private books :Book [];
    private partners :Partner[];
    public utilClass : UtilClass;

    //CONSTRUCTOR
    constructor(name :string, address :string, place :string, books :Book [],partners :Partner[], phone? :string){
        this.name = name;
        this.address = address;
        this.place = place
        this.books = books;
        this.partners = partners;
        phone? this.phone = phone : this.phone = "No data"
    }

    //GETTERS AND SETTERS
    public setName(name :string) :void{ this.name = name};
    public getName():string {return this.name};

    public setAdress(address :string) :void{ this.address = address};
    public getAdress():string {return this.address};

    public setPhone(phone :string) :void{ this.phone = phone};
    public getPhone():string {return this.phone};

    public setPlace(place :string) :void{ this.place = place};
    public getPlace():string {return this.place};

    //SPECIFIC METHODS
    public newSocio(socio : Partner):Partner{
        this.partners.push(socio);
        return socio;
    }

    public newBook(book : Book):Book{
        this.books.push(book);
        return book;
    }

    public showData() {
        console.log(`
        -------------------------------------
            NAME           : ${this.name}
            ADDRESS        : ${this.address}
            PHONE          : ${this.phone}
            PLACE          : ${this.place}   
        -------------------------------------
        `)
    }

}