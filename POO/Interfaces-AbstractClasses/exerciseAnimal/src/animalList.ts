import { Animal } from "./animal";

export class AnimalList{

    private animals: Animal[];

    public constructor(){
        this.animals = [];
    }

    public showInfo(): Animal[]{
        return this.animals;
    }

    public search(animal : Animal): boolean{
        let aux: boolean = false;
        if(this.animals.find(element => element = animal)){
            aux = true;
        }
        return aux;
    }

    public addAnimal(animal: Animal): void{
        this.animals.push(animal);
    }

    public deleteAnimal(animal: Animal): void{
        if(this.search(animal)){
            let index = this.animals.findIndex(element => element = animal);
            this.animals.splice(index,1);
        }
    }

}