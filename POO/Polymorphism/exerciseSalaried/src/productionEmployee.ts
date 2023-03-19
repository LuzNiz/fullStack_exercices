import { Salaried } from "./salaried";

export class ProductionEmployee extends Salaried{
    private turno: string;

    public constructor(name: string,dni: number,holidays: number,baseSalary: number, turno :string){
        super(name,dni,holidays, baseSalary);
        this.turno = turno
    }

    public setTurno(turno : string): void{
        this.turno = turno;
    }

    public getTurno(): string {
        return this.turno
    }

    public getSalary(): number {
        let Salary: number = this.baseSalary + (this.baseSalary * 0.10);
        return Salary;
    }

}