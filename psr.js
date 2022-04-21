let computerScore = 0;
let playerScore = 0; 

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
        console.log("Tie");
    }
    // player picks rock
    else if(pSelection === "rock") {
        if(cSelection === "paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } else {
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        }
    }
    // player picks paper
    else if(pSelection === "paper"){
        if(cSelection === "rock") {
            console.log("You Win! Paper beats Rock");
            playerScore++;
        } else {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
    }
    // player picks scissors
    else {
        if(cSelection === "paper") {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        } else {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
    }
}

// Buttons
let paperBtn = document.querySelector(".paper-btn");
let scissorsBtn = document.querySelector(".scissors-btn");
let rockBtn = document.querySelector(".rock-btn");

paperBtn.addEventListener('click', playRound("paper", computerPlay()));
scissorsBtn.addEventListener('click',  playRound("scissors", computerPlay()));
rockBtn.addEventListener('click',  playRound("rock", computerPlay()));

function game() {
    // for (i = 0; i < 5; i++) {
    //     let pSelection = prompt("Play (paper, scisors or rock?)");
    //     playRound(pSelection, computerPlay());
    // }

    // let pSelection = prompt("Play (paper, scisors or rock?)");
    //     playRound(pSelection, computerPlay());
    // console.log("FINAL SCORE: " + "Computer: " + computerScore + ", You: " + playerScore )
}

// game();

// For Testing
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));