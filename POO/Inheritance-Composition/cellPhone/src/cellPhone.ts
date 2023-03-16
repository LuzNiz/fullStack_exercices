import { SimCard } from "./simCard";
import { Battery } from "./battery";

export class CellPhone {
    private make: string;
    private model: string;
    private simCard: SimCard[];
    private battery: Battery;

    constructor(make: string, model: string, battery: Battery){
        this.make= make;
        this.model = model;
        this.simCard = [];
        this.battery = battery;
    }

    public setMake(make: string): void{
        this.make = make;
    }
    public getMake(): string{
        return this.make
    }

    public setModel(model: string): void{
        this.model = model;
    }

    public getModel(): string{
        return this.model;
    }


    public getInfo(): CellPhone{
        return this;
    }

    public setSimCard(simCard: SimCard): void {
        this.simCard.push(simCard);
    }

    public getSimCards(): SimCard [] {
        return this.simCard;
    }

    public getBattery(): Battery {
        return this.battery;
    }

    public removeSimCard(simCard : SimCard): void {
    const index = this.simCard.findIndex(sim => sim.getInfo === simCard.getInfo);
    if (index !== -1){
        this.simCard.splice(index,1);
    }
    }

}