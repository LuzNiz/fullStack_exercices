import { uuid } from "uuidv4"

export class SimCard {
    private id: string;
    private carrier :string;
    private number: number;

    public constructor(carrier :string, number: number ){
        this.id = uuid();
        this.carrier = carrier;
        this.number = number;
    }

    public setCarrier(carrier :string): void{
        this.carrier = carrier;
    }

    public getCompany(): string{
        return this.carrier;
    }

    

    public setNumber(number: number): void{
        this.number = number;
    }

    public getNumberPhone(): number{
        return this.number;
    }

    public getInfo(): SimCard{
        return this;
    }
}