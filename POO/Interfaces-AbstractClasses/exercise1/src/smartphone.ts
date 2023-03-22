import { iPhone } from "./iPhone";

export class SmartPhone implements iPhone{
    private isOn: boolean;

    public contructor(){
        this.isOn = false;
    }

    public getIsOn(): boolean{
        return this.isOn;
    }

    public on(): void {
        this.isOn = true;
    }

    public off(): void {
        this.isOn = false;
    }

    public call(number: string): void {
        console.log(`Llamando a ${number}...`);
    }

    public takePhoto(): void {
        if(this.isOn){
            console.log("Taking photograph...");
        }
    }
}