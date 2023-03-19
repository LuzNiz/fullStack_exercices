import { FootballPlayer } from "./footballPlayer";
import { Person } from "./person";

export class Coach extends Person {
    private footballPlayers: FootballPlayer[];

    public constructor(firstName: string, lastName: string, passportNumber: string, birthday: string){
        super(firstName, lastName, passportNumber, birthday);
        this.footballPlayers = [];

    }

    public getFootballPlayers(): FootballPlayer[]{
        return this.footballPlayers;
    }

    public newFootballPlayer(player: FootballPlayer, titular: boolean){
        player.setTitular(titular);
        this.footballPlayers.push(player);
    }

    private searchFootballPlayer(firstName: string, lastName: string): number{
        let index: number = this.footballPlayers.findIndex(player => player.getFirstName() === firstName &&
        player.getLastName() === lastName);

        return index;
    }

    public ifTitular(firstName: string, lastName: string): string{
        let index: number = this.searchFootballPlayer(firstName, lastName)
        if(index>=0 && this.footballPlayers[index].getTitular() === true){
            this.footballPlayers[index].setTitular(false);
            return `the player ${this.footballPlayers[index].getFirstName()} is a substitute list player`
        }else if(index>=0 && this.footballPlayers[index].getTitular() === false){
            this.footballPlayers[index].setTitular(true);
            return `the player ${this.footballPlayers[index].getFirstName()} is a starting roster player`
        }else {
            return `Player not found`
        }
    }

    public introduceYourself(): string {
        return `Hello, my name is ${this.getFirstName()} ${this.getLastName()}. I'm the coach of team`
    }

    public showInfo(): Coach{
        return this;
    }
}