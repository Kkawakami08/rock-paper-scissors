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

let playerScore = 0;
let computerScore = 0;

function game() {
 

    function playRound(playerSelection, computerSelection) { 
        if (computerSelection === "rock") {
            switch (playerSelection) {
                case "rock":
                    alert("It's a tie!");
                    break;
                case "paper":
                    alert("You win! Paper beats rock");
                    playerScore++;
                    break;
                case "scissors":
                    alert("You lose. Rock beats scissors");
                    computerScore++;
                    break;
                default:
                    alert("");
                    
            }
        } else if (computerSelection === "paper") {
            switch (playerSelection) {
                case "rock":
                    alert("You lose! Paper beats rock.");
                    computerScore++;
                    break;
                case "paper":
                    alert("It's a tie!");
                    break;
                case "scissors":
                    alert("You win! Scissors beats paper.");
                    playerScore++;
                    break;
                default:
                    alert("");
                    
            }
        } else {
            switch (playerSelection) {
                case "rock":
                    alert("You win! Rock beats scissors");
                    playerScore++;
                    break;
                case "paper":
                    alert("You lose, scissors beats paper");
                    computerScore++;
                    break;
                case "scissors":
                    alert("It's a tie!");
                    break;
                default:
                    alert("");
                    
            }
        }
    }
    return playRound(playerSelection,computerSelection);

    
}
   
console.log(game());

console.log(playerScore);
console.log(computerScore);