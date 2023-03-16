export class Battery {

    private capacity: number;
    private make: string;
    private model: string;

    public constructor(capacity: number,make: string,model: string){
        this.capacity = capacity;
        this.make = make;
        this.model = model;
    }
    public setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
    public getCapacity(): number {
        return this.capacity;
    }

    public setMake(make: string): void {
        this.make = make;
    }
    public getMake(): string {
        return this.make;
    }
    public setModel(model: string): void {
        this.model = model;
    }
    public getModel(): string {
        return this.model;
    }

    public getInfo(): Battery {
        return this
    }
}