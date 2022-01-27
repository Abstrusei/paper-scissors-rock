// Computer play function (randomly returns rock, paper or scissors)
function computerPlay() {
    let plays = ["paper", "scissors", "rock"];
    let computersPlay = plays[Math.floor(Math.random() * plays.length)];
    return computersPlay;
}

function playRound(playerSelection, computerSelection) {
     let pSelection = playerSelection.toLowerCase();
     let cSelection = computerSelection.toLowerCase();
    // plays are identical
    if(pSelection === cSelection) {
        return "Tie";
    }
    // player picks rock
    else if(pSelection === "rock") {
        if(cSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    }
    // player picks paper
    else if(pSelection === "paper"){
        if(cSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
    // player picks scissors
    else {
        if(cSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

// For Testing
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));