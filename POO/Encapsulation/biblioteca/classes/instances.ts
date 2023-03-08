import { Library } from "./library"
import { Book } from "./book"
import { Partner } from "./partner"

const libros :Book[] = [] 
const socios : Partner[] = []
let libraryADM :Library = new Library("LibraryADM", "French 1864", "Las Flores", libros, socios,"2255234124");

libraryADM.showData();

let juanCiancio = libraryADM.newSocio(new Partner("Juan", "Ciancio", "342352352", libraryADM, "4124124"));

console.table(juanCiancio);

juanCiancio.setPassword("Juan386");

console.table(juanCiancio.getPassword());

let luzNiz = libraryADM.newSocio(new Partner("Luz", "Niz", "40065375", libraryADM, "+54 9 2244 234131"));

luzNiz.setPassword("Luce365");
console.table(luzNiz);

let prideAndPrejuice =new Book("Orgullo y prejuicio", "J. Austen", "Romantic", true);
let SherlockHolmes = new Book("Sherlock Holmes: El valle del terror", "Sir. Arthur Conan Doyle",
    "Mistery", true);
libraryADM.newBook(prideAndPrejuice);
libraryADM.newBook(SherlockHolmes);


