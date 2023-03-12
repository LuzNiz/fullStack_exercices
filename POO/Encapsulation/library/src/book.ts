import { UtilClass } from "./utilClass";
import * as fs from 'fs';

export class Book {
    private section :number;
    private shelf :number;
    private title :string;
    private author :string;
    private genere :string;
    private availability :boolean;
    public utilClass :UtilClass;
    public bookFile: string;

    //CONSTRUCTOR
    public constructor(title :string, author :string, genere :string, urlBook: string) {
        this.section = Math.floor(Math.random()*100);
        this.shelf = Math.floor(Math.random()*100);
        this.title = title;
        this.author = author;
        this.genere = genere;
        this.availability = true;
        this.bookFile = urlBook;
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

    public showData():void {
        console.log(`
        -----------------------
        Title:  ${this.title}
        Author: ${this.author}
        Genere: ${this.genere}
        -----------------------
    `);
    }

    public readBook(): void {
        let fileContent = fs.readFileSync(this.bookFile, 'utf8');
        console.log(fileContent);
    }

}