import { Game } from "./game";

export class Blackjack extends Game {
    private numberOfCards: number;
	private tableNumber: number;

    public constructor(apuestaMin: number, cantJugadores: number,cantDeCartas: number,tableNumber: number){
        super(apuestaMin, cantJugadores);
        this.numberOfCards = cantDeCartas;
        this.tableNumber = tableNumber;
    }
    public getCantDeCartas(): number{return this.numberOfCards};
    public setCantDeCartas(numberOfCards: number): void {this.numberOfCards = numberOfCards};
    public getNumMesaBlackJack(): number{return this.tableNumber};
    public setNumMesaBlackJack(tableNumber: number): void {this.tableNumber = tableNumber};


	public dealCards(): string{
        let maxCardPlayer = Math.floor(this.numberOfCards / this.maxPlayers);
        if(this.numberOfCards > 0){
            this.numberOfCards = this.numberOfCards - maxCardPlayer;
        }
        return`Dealing of cards finished. ${this.numberOfCards} cards remain`;
        
    }
}