import { Electrodomestico } from './electrodomestico';

let electrodomesticoUno : Electrodomestico = new Electrodomestico("Heladera", "Samsung", 40000, "White", 1500, 30);
let electrodomesticoDos : Electrodomestico = new Electrodomestico("Heladera","LG", 30000, "Grey", 1300, 20);

let electrodomesticoTres :Electrodomestico = new Electrodomestico ("Cafetera" ,"Philips", 8000, "Black", 500, 3);
let electrodomesticoCuatro :Electrodomestico = new Electrodomestico ("Cafetera" , "Nescafe", 5000, "White", 800, 2.5);

console.table(electrodomesticoUno);

console.log(`${electrodomesticoUno.getType()} ${electrodomesticoUno.getMarca()} Color ${electrodomesticoUno.getColor()} 
$  ${electrodomesticoUno.getPrice()}`);

electrodomesticoDos.setColor("Grey");
electrodomesticoDos.setPrice(35000);

console.log(`${electrodomesticoDos.getType()} ${electrodomesticoDos.getMarca()} Color ${electrodomesticoDos.getColor()}
$ ${electrodomesticoDos.getPrice()}`);

console.log(`${electrodomesticoTres.getType()} ${electrodomesticoTres.getMarca()} Color ${electrodomesticoTres.getColor()}
$ ${electrodomesticoTres.getPrice()}`);

console.log(`${electrodomesticoCuatro.getType()} ${electrodomesticoCuatro.getMarca()} Color ${electrodomesticoCuatro.getColor()}
$ ${electrodomesticoCuatro.getPrice()}`);

console.log(`El balance de ${electrodomesticoUno.getType()} ${electrodomesticoUno.getMarca()} es ${electrodomesticoUno.calcularBalance()}`);
console.log(`El balance de ${electrodomesticoDos.getType()} ${electrodomesticoDos.getMarca()} es ${electrodomesticoDos.calcularBalance()}`);
