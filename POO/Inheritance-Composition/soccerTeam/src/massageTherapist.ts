import { Person } from "./person";

export class MassageTherapist extends Person {
    private registrationNumber: number;

    public constructor(firstName: string, lastName: string, passportNumber: string, birthday: string, registrationNumber: number){
        super(firstName, lastName, passportNumber, birthday);
        this.registrationNumber = registrationNumber;
    }

    public setRegistrationNumber(registrationNumber: number): void{
        this.registrationNumber = registrationNumber;
    }

    public getRegistrationNumber(): number {
        return this.registrationNumber;
    }

    public introduceYourself(): string {
        return `Hello, my name is ${this.getFirstName} ${this.getLastName}. I am the massage therapist of the football team`
    }

    public showInfo(): MassageTherapist{
        return this;
    }
}