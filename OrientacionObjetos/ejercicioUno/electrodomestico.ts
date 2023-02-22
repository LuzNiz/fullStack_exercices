class Electrodomestico {
    private name :string;
    private price :number;
    private color :string;
    private energyConsumption :number;
    private weight :number;

    //SET and GET of the name 
    public setName(name : string) :void {
        this.name = name;
    }
    public getName():String {
        return this.name;
    }

    //SET and GET of the price
    public setPrice(price :number) :void{
        this.price = price;
    }

    public getPrice () : number {
        return this.price;
    }

    //SET and GET of the color

    public setColor(color :string) :void {
        this.color = color;
    }

    public getColor() :string {
        return this.color;
    }

    //SET and GET of energy consumption
    public setEnergyConsumption(energy :number) :void{
        this.energyConsumption = energy;
    }

    public getEnergyConsumption() :number{
        return this.energyConsumption;
    }

    //SET and GET of weight
    public setWeight(weight :number) :void {
        this.weight = weight;
    }

    public getWeight() :number {
        return this.weight;
    }

    //methods 
    public lowConsumption() :boolean {
        if (this.energyConsumption < 1500){
            return true;
        }else {
            return false;
        }
    }

    public balance (): number{
        return this.price / this.price;
    }

    public highEnd(): boolean {
        if(this.balance() > 3){
            return true;
        }
        return false;
    }

}