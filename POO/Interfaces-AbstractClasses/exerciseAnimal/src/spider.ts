import { Animal } from "./animal";

export class Spider extends Animal{

    public constructor(paws: number){
        super(paws);
    }

    public eat():void{
        console.log("I take care of the planet by eating flies");
    }

    public walk(paws: number):void{
        console.log(`With my ${paws}, walk better`);
    }
}