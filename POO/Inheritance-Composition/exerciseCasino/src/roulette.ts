import { Game } from "./game";

export class Roulette extends Game{
    private maxNumber: number;
    private tableNumber: number = 0;
	
    public constructor(apuestaMin: number, cantJugadores: number, maxNumber: number){
        super(apuestaMin, cantJugadores);
        this.maxNumber = maxNumber;
        this.tableNumber ++;
    }

    public setNumMesaRuleta(numMesaRuleta: number):void{this.tableNumber = numMesaRuleta};
    public getNumMesaRuleta():number{ return this.tableNumber};

    public setmaxNumber(maxNumber: number):void{this.maxNumber = maxNumber};
    public getmaxNumber():number{ return this.maxNumber};

	public spinRoulette(): string {
        let winnerNumber = Math.floor(Math.random()* this.maxNumber);
        return `The winner number's ${winnerNumber}`;
    }
}