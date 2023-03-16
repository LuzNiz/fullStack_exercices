import { Casino } from "./casino";

export class Player {
    private firstName: string;
    private lastName: string;
    private mail: string;
    private password :string;
    private status: boolean;
    private amountTokens: number;


    public constructor(firstName: string,lastName: string,email: string, password: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = email;
        this.password = password;
        this.status = false;
        this.amountTokens = 0;
    }

    public getFirstName(): string{ return this.firstName};
    public setFirstName(firstName: string): void {this.firstName = firstName};

    public getLasttName(): string{ return this.lastName};
    public setLastName(lastName: string): void {this.lastName = lastName};

    public getEmail(): string{ return this.mail};
    public setEmail(email: string): void {this.mail = email};

    public getStatus(): boolean{ return this.status};
    public setTokens(tokens: number): void{ this.amountTokens = tokens};
    public getTokens(): number{ return this.amountTokens};

    public signIn(mail: string, password: string): void {
        if(mail == this.mail && password === this.password){
            console.log(`Successful login. Welcome ${this.firstName}`)
            this.status= !this.status;
        }else {
            console.log("Incorrect email and password, enter again")
        }
    }

    public signOut(): void {
        this.status = !this.status;
        console.log("You have successfully logged out")
    }

}