export class Person {
    private firstName: string;
    private lastName: string;
    private passportNumber: string;
    private birthday: string;

    public constructor(firstName: string, lastName: string, passportNumber: string, birthday: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.passportNumber = passportNumber;
        this.birthday = birthday;
    }

    //GETTERS
    public getFirstName(): string{
        return this.firstName;
    }

    public getLastName(): string{
        return this.lastName;
    }

    public getPassportNumber(): string{
        return this.passportNumber;
    }

    public getBirthday(): string{
        return this.birthday;
    }

    //SETTERS
    public setFirstName(firstName: string): void{
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    public setPassportNumber(passportNumber: string): void{
        this.passportNumber = passportNumber;
    }

    public setBirthday(birthday: string): void{
        this.birthday = birthday;
    }

    public introduceYourself(): string {
        return `Hello, my name is ${this.firstName} ${this.lastName}`
    }

    public showInfo(): Person{
        return this;
    }
}
