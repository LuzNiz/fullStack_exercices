import { Book } from "./book";
import { Partner } from "./partner";
import { UtilClass } from "./utilClass";

export class Library {
    private libraryName: string;
    private phone: string;
    private books: Book [];
    private partners: Partner[];
    private utilClass: UtilClass;


    //CONSTRUCTOR
    constructor(libraryName :string, phone? :string){
        this.libraryName = libraryName;
        this.books = [];
        this.partners = [];
        phone? this.phone = phone : this.phone = "No data";
        this.utilClass = new UtilClass();
    }

    //GETTERS AND SETTERS
    public setName(name :string) :void{ this.libraryName = name};
    public getName():string {return this.libraryName};

    public setPhone(phone :string) :void{ this.phone = phone};
    public getPhone():string {return this.phone};

    public getBooks() : Book[] {return this.books}

    public getPartners() :Partner[] { return this.partners}

    public getUtilClass() :UtilClass{ return this.utilClass}

    //SPECIFIC METHODS
    public newSocio(firstName: string, lastName: string, dni: string, library: Library, password :string, phone? :string): any{
        let passwordValidate = this.utilClass.validatePassword(password);
        if(passwordValidate){
            let socio = new Partner (firstName, lastName, dni, library, phone);
            socio.setPassword(password);
            this.partners.push(socio);
            return socio;
        }
    }

    public newBook(library :Library, book : Book):Book{
        this.getBooks().push(book);
        let index = this.search(library , book.getTitle());
        this.books[index].setAvailability(true);
        return book;
    }

    public search(library :Library, title? :string , dni? :string):number{
        let index :number = -1;
        if(title){
            for(let count = 0; count < library.getBooks().length; count ++){
                if(library.getBooks()[count].getTitle() === title){
                    index = count;
                    return index;
                }
            }
        }else if(dni){
            for(let count = 0; count < library.getPartners().length; count ++){
                if(library.getPartners()[count].getDni() === dni){
                    index = count;
                    return index;
                }
            }
        }
        return index;
    }

    public beAvailable(library :Library, index :number) :boolean{
        let available: boolean = library.getBooks()[index].getAvailability();
        return available;
    }

    public deletePartner(library :Library, dni: string) {
        let index: number = this.search(library, undefined ,dni)
        if(index >= 0){
            this.getPartners().splice(index,1);
        }
    }

    public showData() {
        console.log(`
        -------------------------------------
            NAME           : ${this.libraryName}
            PHONE          : ${this.phone}  
        -------------------------------------
        `)
    }

}