import { Vehiculo } from "./vehiculo";
export class Camioneta extends Vehiculo  {

    constructor(marca: string, modelo: string, anio: number ){
        super(marca, modelo, anio)
    }

    public acelerar(): void {
        if(this.getEstaPrendido()){
            this.velocidadActual += 10;
        }
    }

    public showInfo(): Camioneta {
        return this;
    }
    
}