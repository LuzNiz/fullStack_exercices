import { Vehiculo } from "./vehiculo";
export class AutoCiudad extends Vehiculo  {

    constructor(marca: string, modelo: string, anio: number ){
        super(marca, modelo, anio)
    }

    public acelerar(): void {
        if(this.getEstaPrendido()){
            this.velocidadActual += 5;
        }
    }

    public showInfo(): AutoCiudad {
        return this;
    }
}