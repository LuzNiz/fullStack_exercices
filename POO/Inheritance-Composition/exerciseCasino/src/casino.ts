import { Game } from "./game";
import { Player } from "./player";

export class Casino {
    private casinoName: string;
    private place: string;
    private address: string;
    private players: Player[];
    private game: Game;
    private usersConected: number;


    public constructor(casinoName: string, place: string, address: string){
        this.casinoName = casinoName;
        this.place = place;
        this.address = address;
        this.players = [];
        this.usersConected = 0;
    }

    public getCasinoName():string{ return this.casinoName};
    public setCasinoName(casinoName: string): void{this.casinoName = casinoName};

    public getPlace():string{ return this.place};
    public setPlace(place: string): void{this.place = place};

    public getAddress():string {return this.address};
    public setAddress(address: string): void{this.address = address};

    public getPlayers(): Player[] {return this.players};

    public getGames(): Game {return this.game};

    public getUserConected(): number {
        this.usersConected = this.countUsersConected()
        return this.usersConected
    };

    
    public buyTokens (money: number, player: Player) {
        const valueToken = 200;
        if(player.getStatus() == true && money > valueToken && money % 100 === 0){
            const amountTokens =  money / valueToken;
            player.setTokens(amountTokens);
        }else {
            console.log(`You must enter a number greater than ${valueToken}. The number must be a multiple of 100`);
        }
    };

    public setNewUser(player :Player){
        this.players.push(player);
    }

    private countUsersConected(): number {
        let users = 0;
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i].getStatus()){
                users ++;
            }
        }
        return users;
    };
} 
