export class Contact {
    private firstName :string;
    private lastName :string;
    private phoneNumber :number;

    constructor(firstName :string, lastName :string, phoneNumber :number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    public getFirstName() :string {
        return this.firstName;
    }

    public getLastName() :string {
        return this.lastName;
    }

    public getPhoneNumber() :number {return this.phoneNumber}

    public editContact(firstName? :string, lastName? :string, phone? :number) {
        firstName? this.firstName = firstName : this.firstName;
        lastName? this.lastName = lastName : this.lastName;
        phone? this.phoneNumber = phone : this.phoneNumber;
    }
}