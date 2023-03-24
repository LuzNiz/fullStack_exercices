import { Spider } from "./spider";
import { AnimalList } from "./animalList";
import { Cat } from "./cat";
import { Fish } from "./fish";

let animalList = new AnimalList();
let ara01 = new Spider(8);
let michiOne = new Cat("Michi", 4);
let nemo01 = new Fish("Nemo", 0);

animalList.addAnimal(ara01);
animalList.addAnimal(michiOne);
animalList.addAnimal(nemo01);

console.log(animalList.showInfo());

ara01.eat();
michiOne.eat();
nemo01.eat();

ara01.walk(8);
michiOne.walk(4);
nemo01.walk(0);

michiOne.play("Michi");
nemo01.play("Nemo");

animalList.search(ara01);
animalList.deleteAnimal(ara01);
console.log(animalList.showInfo());




