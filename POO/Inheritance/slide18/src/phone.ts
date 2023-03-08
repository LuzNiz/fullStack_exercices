import { Contact } from "./contact";


export class Phone {
    private isOn :boolean;
    private batteryPercentage :number;
    private contacts: Contact[];

    //CONSTRUCTOR
    constructor(){
        this.isOn = false;
        this.batteryPercentage = 77;
        this.contacts = [];
    }

    //GETTERS AND SETTERS
    public getIsOn() :boolean {return this.isOn}

    public setBatteryPercentage( batteryPercentage : number): void {
        this.batteryPercentage = batteryPercentage;
    }

    public getBatteryPercentage(): number {return this.batteryPercentage}

    public getContacts(): Contact[] {return this.contacts}

    //SPECIFIC METHODS
    public switchOnOff() :void {
        this.isOn = !this.isOn;
    }
    
    public lowBattery() :void {
        if (this.getIsOn()){
            if(this.batteryPercentage === 0){
                this.switchOnOff();
            }else if (this.batteryPercentage >=1 && this.batteryPercentage <=5){
                console.log(`Your battery is running low (${this.batteryPercentage}%) You might want to plug in your
                Phone`);
            }else if (this.batteryPercentage >5 && this.batteryPercentage >=19){
                console.log(`Low battery. Your battery is running low (${this.batteryPercentage}%)`);
            }
        }
    }

    public newContact(contact : Contact): Contact{
        this.contacts.push(contact);
        return contact;
    }

    private search(firstName: string, lastName: string) :number {
        let index :number = -1;
        for(let count = 0; count < this.contacts.length; count ++){
            index = this.contacts.findIndex(Element => this.contacts[count].getFirstName() === firstName
            && this.contacts[count].getLastName() === lastName);
            index = count;
            break;
        }
        return index;
    }

    public sendMessage(message :string , firstName: string , lastName: string) {
        let indexContact = this.search(firstName, lastName);
        let contactName =this.getContacts()[indexContact].getFirstName();
        let phoneNumber = this.getContacts()[indexContact].getPhoneNumber();
        console.log(`
        TO:  ${contactName} (${(phoneNumber)})
        ---------------------------------- 
        MESSAGE:
        ${message}
        `);
        
    }
    
    public makeCall(firstName: string , lastName: string) {
        let indexContact = this.search(firstName, lastName);
        let contactName =this.getContacts()[indexContact].getFirstName();
        let phoneNumber = this.getContacts()[indexContact].getPhoneNumber();
        console.log(`
                CALLING TO...
        ------------------------
            ${contactName} 
            ${(phoneNumber)}
        ------------------------
        `);
    }
}