import { Book } from "./book";
import { Library } from "./library";

export class BookManager {
    private books: Book[];

    public constructor() {
        this.books = [];
    }

    public getBooks(): Book[]{ return this.books};

    public newBook(book : Book):Book{
        this.getBooks().push(book);
        let index = this.search(book.getTitle());
        this.books[index].setAvailability(true);
        return book;
    }

    public search(title: string): number{
        let index :number = -1;
            for(let count = 0; count < this.getBooks().length; count ++){
                if(this.getBooks()[count].getTitle() === title){
                    index = count;
                }
            }
            return index;
        }

    public beAvailable(index :number) :boolean{
        let available: boolean = this.getBooks()[index].getAvailability();
        return available;
    }

    
    public consultBook(title: string):void {
        let index: number = this.search(title);
        if(index >= 0){
            this.getBooks()[index].showData();
        }
    }
    
    public modifyBook(titlebook:string, newTitle? :string, newAuthor? :string, newGenere? :string): void{
        let index: number = this.search(titlebook);
        if(newTitle){
            this.getBooks()[index].setTitle(newTitle);
        }else if(newAuthor){
            this.getBooks()[index].setAuthor(newAuthor);
        }else if(newGenere){
            this.getBooks()[index].setGenere(newGenere);
        }
    }
    
    public deleteBook(title: string): void{
        let index = this.search(title);
        if(index >= 0){
            this.getBooks().splice(index, 1);
        }
    }
}