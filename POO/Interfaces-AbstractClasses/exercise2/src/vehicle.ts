import { CityCar } from "./cityCar";
import { SportsCar } from "./sportsCar";
import { Van } from "./van";

export abstract class Vehicle {
    private brand: string;
    private model: string;
    private year: number;
    protected currentSpeed: number;
    private on: boolean
    
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
        this.on = false;
    }

    abstract speedUp(): void;

    public turnOnOff(): void{
        this.on = !this.on;
    }

    public getBrand(): string{
        return this.brand;
    }
    public setBrand (brand: string): void{
        this.brand = brand;
    }
    public getModel(): string{
        return this.model;
    }
    public setModel (model: string): void{
        this.model =model;
    }

    public getYear(): number{
        return this.year;
    }


    public getIsOn(): boolean {
        return this.on;
    }
    public getCurrentSpeed(): number {
        return this.currentSpeed;
    }

    abstract showInfo(): CityCar | SportsCar | Van;
}