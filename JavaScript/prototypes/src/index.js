//Declaro la FUNCIÓN CONSTRUCTORA del objeto ANIMAL
function Animal(colour, weight, height){
    this.colour = colour;
    this.weight = weight;
    this.height = height;
}
//Declaro la FUNCIÓN CONSTRUCTORA del objeto GATO
function Cat(breed, age, vaccines){
    this.breed = breed;
    this.age = age;
    this.vaccines = vaccines;
}
//Al objeto Gato a través del metodo PROTOTYPE le agrego un metodo nuevo (anonymous fuction)
Cat.prototype.showInfo = function (){
    return `Raza: ${this.breed}, edad: ${this.age}, Vacunas: ${this.vaccines}`;
}
//Instancio un objeto Gato
const cat = new Cat ("Siames", 8, "completas");
//Al objeto creado le agrego a través del método prototype una instancia del objeto Animal
cat.prototype = new Animal("Marron", "8kg", "25cm");
console.log(cat);
console.log(cat.showInfo());