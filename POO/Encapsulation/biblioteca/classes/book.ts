export class Book {
    private title :string;
    private author :string;
    private genere :string;

    //CONSTRUCTOR
    public constructor(title :string, author :string, genere :string) {
        this.title = title;
        this.author = author;
        this.genere = genere;

    }

    //GETTERS AND SETTERS
    public setTitle(title :string) :void{ this.title = title}
    public getTitle() :string{ return this.title}

    public setAuthor(author :string) :void{ this.author = author}
    public getAuthor() :string{return this.author}

    public setGenere(genere :string) :void{ this.genere = genere}
    public getGenere() :string{return this.genere}

    //OWN METHODS


    public available() :boolean {

        return false;
    }
}