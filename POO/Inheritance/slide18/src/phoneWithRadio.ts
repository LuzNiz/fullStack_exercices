import { Phone } from "./phone";

export class PhoneWithRadio extends Phone {
    private frequency :number;

    //CONSTRUCTOR
    constructor(){
        super();
        this.frequency = 105;
    }
    //GETTERS AND SETTERS
    public getFrequency() :number{
        return this.frequency;
    }
    //SPECIFIC METHODS
    public changeFrequency(frequency :number) :void {
        if(this.getIsOn()){
            this.frequency = frequency;
        }
    }

}