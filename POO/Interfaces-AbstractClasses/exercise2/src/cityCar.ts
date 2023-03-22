import { Vehicle } from "./vehicle";

export class CityCar extends Vehicle  {

    constructor(brand: string, model: string, year: number){
        super(brand, model, year)
    }

    public speedUp(): void {
        if(this.getIsOn()){
            this.currentSpeed += 5;
        }
    }

    public showInfo(): CityCar {
        return this;
    }
}