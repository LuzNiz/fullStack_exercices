import { Vehicle } from "./vehicle";
export class Van extends Vehicle  {

    constructor(marca: string, modelo: string, anio: number ){
        super(marca, modelo, anio)
    }

    public speedUp(): void {
        if(this.getIsOn()){
            this.currentSpeed += 10;
        }
    }

    public showInfo(): Van {
        return this;
    }
}