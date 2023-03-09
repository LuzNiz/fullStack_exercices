import { Library } from "./library";
import { Book } from "./book"

let libraryADM :Library = new Library("LibraryADM","2255234124");

libraryADM.showData();

let juanCiancio = libraryADM.newSocio("Juan", "Ciancio", "342352352", libraryADM,"juan386", "4124124");
let luzNiz = libraryADM.newSocio("Luz", "Niz", "40065375", libraryADM,"Luce365", "+54 9 2244 234131");
let ClaraDiaz = libraryADM.newSocio("Clara", "Diaz", "7512546", libraryADM,"CDiaz32", "+54 9 2244 12313");
console.table(libraryADM.getPartners());

let prideAndPrejuice =new Book("Orgullo y prejuicio", "J. Austen", "Romantic");
let SherlockHolmes = new Book("Sherlock Holmes: El valle del terror", "Sir. Arthur Conan Doyle",
    "Mistery");
let senseAndsensibility =new Book("Sentido y Sensibilidad", "J. Austen", "Romantic");

libraryADM.newBook(libraryADM, prideAndPrejuice);
libraryADM.newBook(libraryADM, SherlockHolmes);
libraryADM.newBook(libraryADM, senseAndsensibility);

console.table(libraryADM.getBooks());
luzNiz.checkOutBooks(["Orgullo y prejuicio","Sherlock Holmes: El valle del terror" ]);
console.table(libraryADM.getBooks());

luzNiz.returnBooks(libraryADM, ["Sherlock Holmes: El valle del terror"]);

console.table(libraryADM.getBooks());
console.table(libraryADM.getPartners());

libraryADM.deletePartner(libraryADM, "40065375" );
console.table(libraryADM.getPartners());