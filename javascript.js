function computerPlay() {
    let computerOptions = ["rock","paper","scissors"];
    let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)]; 
    return computerRandom;
}

let computerSelection = computerPlay();

console.log(`This is computer: ${computerSelection}`);

let playerPrompt = prompt("Rock, Paper, or Scissors?");
let playerSelection = playerPrompt.toLowerCase();

console.log(`This is player: ${playerSelection}`);

function playRound(playerSelection, computerSelection) { 
    if (computerSelection === "rock") {
        switch (playerSelection) {
            case "rock":
                alert("It's a tie!");
                break;
            case "paper":
                alert("You win! Paper beats rock");
                break;
            case "scissors":
                alert("You lose. Rock beats scissors");
                break;
            default:
                alert("");
                
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                alert("You lose! Paper beats rock.");
                break;
            case "paper":
                alert("It's a tie!");
                break;
            case "scissors":
                alert("You win! Scissors beats paper.");
                break;
            default:
                alert("");
                
        }
    } else {
        switch (playerSelection) {
            case "rock":
                alert("You win! Rock beats scissors");
                break;
            case "paper":
                alert("You lose, scissors beats paper");
                break;
            case "scissors":
                alert("It's a tie!");
                break;
            default:
                alert("");
                
        }
    }
}
   
console.log(playRound(playerSelection,computerSelection));