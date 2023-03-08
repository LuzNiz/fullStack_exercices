import { UtilClass } from "./utilClass";

export class Book {
    private id :string;
    private section :number;
    private shelf :number;
    private title :string;
    private author :string;
    private genere :string;
    private disponibilidad :boolean;
    public utilClass :UtilClass;

    //CONSTRUCTOR
    public constructor(title :string, author :string, genere :string, disponibilidad :boolean) {
        this.id = this.utilClass.generateRandomString(4);
        this.section = Math.floor(Math.random()*100);
        this.section = Math.floor(Math.random()*100);
        this.title = title;
        this.author = author;
        this.genere = genere;
        this.disponibilidad = disponibilidad;
    }

    //GETTERS AND SETTERS
    public setTitle(title :string) :void{ this.title = title}
    public getTitle() :string{ return this.title}

    public setAuthor(author :string) :void{ this.author = author}
    public getAuthor() :string{return this.author}

    public setGenere(genere :string) :void{ this.genere = genere}
    public getGenere() :string{return this.genere}

    public setDisponibilidad(diponibilidad :boolean) :void{ this.disponibilidad = this.disponibilidad}
    public getDisponibilidad() :boolean{return this.disponibilidad}

    //OWN METHODS


    public isAvailable() :boolean {

        return this.disponibilidad;
    }
}