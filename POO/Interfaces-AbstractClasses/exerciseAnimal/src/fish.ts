import { Animal } from "./animal";
import { iMascot } from "./iMascot";

export class Fish extends Animal implements iMascot{
    private name: string;

    public constructor(name: string, paws: number){
        super(paws);
        this.name = name;
    }

    public eat(): void {
        console.log("Estoy comiendo algas");
    }

    public play(name: string): void {
        console.log(`My name is ${name}, let's play hide and seek`);
    }

    public walk(paws: number): void{
        console.log(`I don't walk, I swim because I have ${this.getPaws()} paws`);
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
}
}