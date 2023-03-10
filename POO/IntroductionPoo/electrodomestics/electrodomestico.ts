export class Electrodomestico {
    private type :string;
    private marca :string;
    private price :number;
    private color :string;
    private energyConsumption :number;
    private weight :number;

    //CONSTRUCTOR
    constructor(type: string, marca : string, price: number, color :string, energyConsumption :number, weight :number){
        this.type = type;
        this.marca = marca;
        this.price = price;
        this.color = color;
        this.energyConsumption = energyConsumption;
        this.weight = weight;
    }

    //SET and GET of the type 
    public setType(type : string) :void {
        this.type = type;
    }
    public getType():String {
        return this.type;
    }

    public setMarca(marca : string) :void {
        this.type = marca;
    }
    public getMarca():String {
        return this.marca;
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

    public calcularBalance (): number{
        return this.price / this.weight;
    }

    public highEnd(): boolean {
        if(this.calcularBalance() > 3){
            return true;
        }else {
            return false;
        }
    }

}