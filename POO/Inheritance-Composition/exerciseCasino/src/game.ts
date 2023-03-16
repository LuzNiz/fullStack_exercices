export class Game {
    protected minimunBet: number;
    protected maxPlayers: number;

    public constructor(apuestaMin: number, cantJugadores: number ){
        this.minimunBet = apuestaMin;
        this.maxPlayers = cantJugadores;

    }
    public setApuestaMin(minimunBet: number): void {this.minimunBet = minimunBet};
    public getApuestaMin(): number {return this.minimunBet};
    public setcantMaxJugadores(maxPlayers: number): void {this.maxPlayers = maxPlayers};
    public getcantMaxJugadores(): number {return this.maxPlayers};

}