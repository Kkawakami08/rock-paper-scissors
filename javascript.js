function computerPlay() {
    let computerOptions = ["rock","paper","scissors"];
    let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)]; 
    return computerRandom;
}

let computerSelection = computerPlay();

console.log(computerSelection);


