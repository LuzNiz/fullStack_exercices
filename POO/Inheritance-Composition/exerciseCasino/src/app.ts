import { Casino } from "./casino";
import { Player } from "./player";
import { Blackjack } from "./blackjack";
import { Roulette } from "./roulette";

let playerOne = new Player("Luz", "Niz", "luzniz37@gmail.com", "Luce375");
let playerTwo = new Player("Valentin", "Lopez", "valenlopez@gmail.com", "185Valen");
let casinoOne = new Casino("Vegas","Las Vegas","Sant Marino 386");
let rouletteOne = new Roulette(500, 15, 36);
let blackjackVIP = new Blackjack(5000, 3, 54, 1);

casinoOne.setNewUser(playerOne);
casinoOne.setNewUser(playerTwo);
console.log(casinoOne.getPlayers());
console.log(casinoOne.getUserConected());

playerOne.signIn("luzniz37@gmail.com", "Luce375");
console.log(casinoOne.getUserConected());
console.table(casinoOne.getPlayers());
//playerTwo.signIn("valenlopez@gmail.com", "185Valen");
console.log(casinoOne.getUserConected());
casinoOne.buyTokens(2000, playerOne);

console.log(playerOne.getTokens());

console.log(rouletteOne.spinRoulette());
console.log(blackjackVIP.dealCards());
console.log(blackjackVIP.dealCards());


