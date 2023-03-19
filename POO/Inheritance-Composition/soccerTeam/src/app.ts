import { Coach } from "./coach";
import { FootballPlayer } from "./footballPlayer";
import { FootballTeam } from "./footballTeam";
import { MassageTherapist } from "./massageTherapist";

let coach01 = new Coach("Lionel", "Scaloni", "A2345", "16/05/1978");
let massageTherapist01 = new MassageTherapist("Juan Pedro", "Peréz", "A2345", "24/3/83", 1234);

let player27= new FootballPlayer ("Julian", "Alvarez", "B34235", "31/01/2000", 27);
let player24= new FootballPlayer ("Enzo", "Fernandez", "A7825", "17/01/2001", 24);
let player07= new FootballPlayer ("Rodrigo", "De Paul", "B1223", "21/05/1994", 7);
let player11= new FootballPlayer ("Angel", "Di Maria", "B4389", "14/02/1988", 11);
let player10= new FootballPlayer ("Lionel", "Messi", "AQ235", "24/06/1987", 10);
coach01.newFootballPlayer(player27, true);
coach01.newFootballPlayer(player24, true);
coach01.newFootballPlayer(player07, true);
coach01.newFootballPlayer(player11, true);
coach01.newFootballPlayer(player10, true);

console.log(coach01.getFootballPlayers());
coach01.ifTitular("Julian", "Alvarez");
console.log(coach01.getFootballPlayers());

console.log(coach01.showInfo());
console.log(coach01.introduceYourself());

console.log(player10.introduceYourself());

let argentina = new FootballTeam("Argentina", coach01, massageTherapist01);

console.log(argentina.showInfo());