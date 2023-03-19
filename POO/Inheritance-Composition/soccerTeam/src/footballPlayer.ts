import { Person } from "./person";

export class FootballPlayer extends Person {
    private jerseyNumber: number;
    private titular: boolean;

    public constructor(firstName: string, lastName: string, passportNumber: string, birthday: string, jerseyNumber: number){
        super(firstName, lastName, passportNumber, birthday);
        this.jerseyNumber = jerseyNumber;
    }

    public setJerseyNumber(jerseyNumber: number): void{
        this.jerseyNumber = jerseyNumber;
    }

    public getJerseyNumber(): number{
        return this.jerseyNumber;
    }

    public setTitular(titular: boolean): void{
        this.titular = titular;
    }

    public getTitular(): boolean{
        return this.titular;
    }

    public introduceYourself(): string {
        return `Hello, my name is ${this.getFirstName()} ${this.getLastName()}. I'm the ${this.jerseyNumber}rd player on this team`
    }

    public showInfo(): FootballPlayer{
        return this;
    }
}