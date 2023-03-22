import { Vehicle } from "./vehicle";
export class SportsCar extends Vehicle  {

    constructor(marca: string, modelo: string, anio: number ){
        super(marca, modelo, anio)
    }

    public speedUp(): void {
        if(this.getIsOn()){
            this.currentSpeed += 16;
        }
    }

    public showInfo(): SportsCar {
        return this;
    }
}