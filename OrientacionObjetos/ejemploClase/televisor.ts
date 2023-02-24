class Televisor {
    private estaPrendido :boolean;
    private canalActual :number;
    private volumenActual :number;
    private marca : string;
    private esSmartTV:boolean;
    private color:string;

    //CONSTRUCTOR
    constructor( estaPrendido :boolean, canalActual :number, volumenActual :number, marca :string ,
        esSmartTV :boolean, color: string){
        this.estaPrendido = estaPrendido;
        this.canalActual = canalActual ;
        this.volumenActual = volumenActual ;
        this.marca = marca;
        this.esSmartTV = esSmartTV;
        this.color = color;
    }

    //GETTERS AND SETTERS

    public setEstaPrendido( estaPrendido : boolean): void{
        this.estaPrendido = estaPrendido;
    }

    public getEstaPrendido(): boolean{
        return this.estaPrendido;
    }

    public setcanalActual( canalActual : number): void{
        this.canalActual = canalActual;
    }

    public getCanalActual(): number{
        return this.canalActual;
    }

    public setVolumenActual( volumenActual : number): void{
        this.volumenActual = volumenActual;
    }

    public getVolumenActual(): number{
        return this.volumenActual;
    }

    public setMarca( marca : string): void{
        this.marca = marca;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setEsSmartTV( esSmartTV :boolean): void{
        this.esSmartTV = esSmartTV;
    }

    public getEsSmartTV(): boolean{
        return this.esSmartTV;
    }

    public setColor( color : string): void{
        this.color = color;
    }

    public getColor(): string{
        return this.color;
    }

    //methods
    public prenderApagar():void {
        if(this.estaPrendido == false){
            this.estaPrendido = true;
        } else {
            this.estaPrendido = false;
        }
    }

    public bajarVolumen():void {
        if(this.volumenActual <=100 && this.volumenActual >= 1){
            this.volumenActual = this.volumenActual --;
        }
    }

    public subirVolumen():void{
        if (this.volumenActual >=0 && this.volumenActual <= 100){
            this.volumenActual = this.volumenActual ++;
        }
    }

    public bajarCanal():void{
        if(this.canalActual <= 800 && this.canalActual > 0){
            this.canalActual = this.canalActual--;
        }else if (this.canalActual <= 800 && this.canalActual > 1) {
            this.canalActual = this.canalActual++;
        }
    }

    public subirCanal():void {
        if (this.canalActual <= 800 && this.canalActual > 1) {
            this.canalActual = this.canalActual++;
        }
    }
}

//Instancias
let televisor1 : Televisor = new Televisor(true, 155, 73, "Samsung", true, "Negro");
let televisor2 : Televisor = new Televisor(false, 0, 0, "LG", true, "Blanco");

console.log(televisor1);
console.log(televisor2);

