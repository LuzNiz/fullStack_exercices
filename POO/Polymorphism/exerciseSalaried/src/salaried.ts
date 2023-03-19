export class Salaried {
    protected name: string;
    protected dni: number;
    protected holidays: number;
    protected baseSalary: number;

    public constructor(name: string,dni: number,holidays: number,baseSalary: number){
        this.name = name;
        this.dni = dni;
        this.holidays = holidays;
        this.baseSalary = baseSalary;
    }

    public getName(): string {
        return this.name;
    }

    public getDni(): number {
        return this.dni;
    }
    public getHolidays(): number {
        return this.holidays;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public setHolidays(holidays: number): void {
        this.holidays = holidays;
    }

    public getSalary() : number {
        let Salary: number = this.baseSalary + (this.baseSalary * 0.20);
        return Salary;
    }

}