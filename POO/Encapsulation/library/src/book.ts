import { UtilClass } from "./utilClass";

export class Book {
    private section :number;
    private shelf :number;
    private title :string;
    private author :string;
    private genere :string;
    private availability :boolean;
    public utilClass :UtilClass;

    //CONSTRUCTOR
    public constructor(title :string, author :string, genere :string) {
        this.section = Math.floor(Math.random()*100);
        this.shelf = Math.floor(Math.random()*100);
        this.title = title;
        this.author = author;
        this.genere = genere;
        this.availability = true;
    }

    //GETTERS AND SETTERS
    public setTitle(title :string) :void{ this.title = title}
    public getTitle() :string{ return this.title}

    public setAuthor(author :string) :void{ this.author = author}
    public getAuthor() :string{return this.author}

    public setGenere(genere :string) :void{ this.genere = genere}
    public getGenere() :string{return this.genere}

    public setAvailability(availability :boolean) :void{ this.availability = availability}
    public getAvailability() :boolean {return this.availability}
}