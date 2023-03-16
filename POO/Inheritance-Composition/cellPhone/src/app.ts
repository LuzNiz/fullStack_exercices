import { CellPhone } from "./CellPhone";
import { SimCard } from "./simCard";
import { Battery } from "./battery";
let batteryA70 = new Battery(5000, "Samsung", "320F");
let celularUno = new CellPhone("Samsung", "A70", batteryA70);

console.log(celularUno.getInfo());

let simCardUno = new SimCard("Claro", 2244567895);
let simCardDos = new SimCard("Tuenti", 223276891);

celularUno.setSimCard(simCardUno);
celularUno.setSimCard(simCardDos);

console.log(celularUno.getInfo());

celularUno.removeSimCard(simCardUno)
console.log(celularUno.getInfo());


