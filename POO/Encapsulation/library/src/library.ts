import { BookManager } from "./booksManager";
import { Partner } from "./partner";
import { UtilClass } from "./utilClass";

export class Library {
    private libraryName: string;
    private address: string;
    private locality: string;
    private phone: string;
    private bookManager: BookManager;
    private partners: Partner[];
    private utilClass: UtilClass;


    //CONSTRUCTOR
    constructor(libraryName :string, address: string, locality: string, phone? :string){
        this.libraryName = libraryName;
        this.address = address;
        this.locality = locality;
        this.bookManager = new BookManager;
        this.partners = [];
        phone? this.phone = phone : this.phone = "No data";
        this.utilClass = new UtilClass();
    }

    //GETTERS AND SETTERS
    public setLibraryName(libraryName :string) :void{ this.libraryName = libraryName};
    public getLibraryName():string {return this.libraryName};

    public setAddress(address :string) :void{ this.address = address};
    public getAddress():string {return this.address};

    public setLocality(locality :string) :void{ this.locality = locality};
    public getLocality():string {return this.locality};

    public setPhone(phone :string) :void{ this.phone = phone};
    public getPhone():string {return this.phone};

    public getBookManager() : BookManager {return this.bookManager}

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

    public searchPartner(library :Library, dni :string):number{
        let index :number = -1;
            for(let count = 0; count < library.getPartners().length; count ++){
                if(library.getPartners()[count].getDni() === dni){
                    index = count;
                    return index;
                }
            }
        return index;
    }


    public deletePartner(library :Library, dni: string) {
        let index: number = this.searchPartner(library, dni)
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