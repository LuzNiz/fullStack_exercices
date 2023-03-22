import { AutoCiudad } from "./autoCiudad";
import { AutoDeportivo } from "./autoDeportivo";
import { Camioneta } from "./camioneta";

export abstract class Vehiculo {
    private marca: string;
    private modelo: string;
    private year: number;
    protected velocidadActual: number;
    private estaPrendido: boolean
    
    constructor(marca: string, modelo: string, year: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar(): void;

    public prender(): void{
        this.estaPrendido = true;
    }

    public apagar(): void{
        this.estaPrendido = false;
    }

    public getMarca(): string{
        return this.marca;
    }
    public getModelo(): string{
        return this.modelo;
    }

    public getYear(): number{
        return this.year;
    }

    public getEstaPrendido(): boolean {
        return this.estaPrendido;
    }
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    abstract showInfo(): AutoCiudad | AutoDeportivo | Camioneta;
}