export abstract class Animal{
    private paws: number;

    public constructor(paws: number){
        this.paws = paws;
    }

    public getPaws(): number{
        return this.paws;
    }

    public setPaws(paws: number): void{
        this.paws = paws;
    }

    abstract eat():void;
    abstract walk(paws: number): void;
}