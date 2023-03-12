import { Library } from "./library";
import { Book } from "./book"

let libraryADM :Library = new Library("LibraryADM","San Martin 386", "Las Flores","2255234124");

libraryADM.showData();

let juanCiancio = libraryADM.newSocio("Juan", "Ciancio", "342352352", libraryADM,"juan386", "4124124");
let luzNiz = libraryADM.newSocio("Luz", "Niz", "40065375", libraryADM,"Luce365", "+54 9 2244 234131");
let ClaraDiaz = libraryADM.newSocio("Clara", "Diaz", "7512546", libraryADM,"CDiaz32", "+54 9 2244 12313");
console.table(libraryADM.getPartners());

let prideAndPrejuice =new Book("Orgullo y prejuicio", "J. Austen", "Romantic", "../books/orgulloYPrejuicio.txt");
let sherlockHolmes = new Book("Sherlock Holmes: El valle del terror", "Sir. Arthur Conan Doyle",
    "Mistery", "../books/elValleDelTerror.txt");
let senseAndsensibility =new Book("Sentido y Sensibilidad", "J. Austen", "Romantic", "../books/sentidoYSensibilidad.txt");

libraryADM.getBookManager().newBook(prideAndPrejuice);
libraryADM.getBookManager().newBook(sherlockHolmes);
libraryADM.getBookManager().newBook(senseAndsensibility);

console.table(libraryADM.getBookManager().getBooks());
luzNiz.checkOutBooks(["Orgullo y prejuicio","Sherlock Holmes: El valle del terror" ]);
console.table(libraryADM.getBookManager().getBooks());

luzNiz.returnBooks(libraryADM, ["Sherlock Holmes: El valle del terror"]);

console.table(libraryADM.getBookManager().getBooks());
console.table(libraryADM.getPartners());
libraryADM.getBookManager().consultBook("Orgullo y prejuicio");

libraryADM.deletePartner(libraryADM, "40065375" );
console.table(libraryADM.getPartners());
libraryADM.getBookManager().deleteBook("Sherlock Holmes: El valle del terror");
console.table(libraryADM.getBookManager().getBooks());

sherlockHolmes.readBook();
