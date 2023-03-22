import { Vehiculo } from "./vehiculo";
export class AutoDeportivo extends Vehiculo  {

    constructor(marca: string, modelo: string, anio: number ){
        super(marca, modelo, anio)
    }

    public acelerar(): void {
        if(this.getEstaPrendido()){
            this.velocidadActual += 16;
        }
    }

    public showInfo(): AutoDeportivo {
        return this;
    }
}