import { Animal } from "./animal";
import { iMascot } from "./iMascot";

export class Cat extends Animal implements iMascot{
    private name: string;

    public constructor(name: string, paws: number){
        super(paws);
        this.name = name;
    }

    public eat(): void {
        console.log(`I like Sushi`);
    }

    public play(name: string): void {
        console.log(`My name is ${name}, I want to play with the ball`);
    }

    public walk(paws: number): void{
        console.log(`I walk with my ${paws} paws`);
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }
}