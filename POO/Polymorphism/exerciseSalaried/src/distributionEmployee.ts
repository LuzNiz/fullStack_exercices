import { Salaried } from "./salaried";

export class DistributionEmployee extends Salaried{
    private zona: string;

    public constructor(name: string,dni: number,holidays: number,baseSalary: number, zona :string){
        super(name,dni,holidays, baseSalary);
        this.zona = zona;
    }

    public setZona(zona : string): void{
        this.zona = zona;
    }

    public getTurno(): string {
        return this.zona;
    }

    public getSalary(): number {
        let Salary: number = this.baseSalary + (this.baseSalary * 0.05);
        return Salary;
    }

}