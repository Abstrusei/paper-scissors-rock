let computerScore = 0;
let playerScore = 0; 

// Computer play function (randomly returns rock, paper or scissors)
function computerPlay() {
    let plays = ["paper", "scissors", "rock"];
    let computersPlay = plays[Math.floor(Math.random() * plays.length)];
    console.log(computerPlay);
    return computersPlay;
}

function playRound(playerSelection) {
     let pSelection = playerSelection.toLowerCase();
     let cSelection = computerPlay();
     let gameResults =  document.getElementById("game-results");
     let runningScore = document.getElementById("running-score");
     let finalScore = document.getElementById("final-score");
 
    // plays are identical
    if(pSelection === cSelection) {
        gameResults.textContent = "Tie";
        runningScore.textContent = `SCORE: Computer: ${computerScore}, You: ${playerScore}`;
    }
    // player picks paper
    else if(pSelection === "paper"){
        if(cSelection === "rock") {
            gameResults.textContent = "You Win! Paper beats Rock";
            playerScore++;
        } else {
            gameResults.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
        runningScore.textContent = `SCORE: Computer: ${computerScore}, You: ${playerScore}`;
    }
     // player picks scissors
     else if (pSelection === "scissors") {
        if(cSelection === "paper") {
            gameResults.textContent = "You Win! Scissors beats Paper";
            playerScore++;
        } else {
            gameResults.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }   
        runningScore.textContent = `SCORE: Computer: ${computerScore}, You: ${playerScore}`;
    }
    // player picks rock
    else {
        if(cSelection === "paper") {
            gameResults.textContent = "You Lose! Paper beats Rock";
            computerScore++;
        } else {
            gameResults.textContent = "You Win! Rock beats Scissors";
            playerScore++;
        }
        runningScore.textContent = `SCORE: Computer: ${computerScore}, You: ${playerScore}`;
    }
    
   if (computerScore == 5) {
       finalScore.textContent = "FINAL SCORE: You lose";
       deactivateBtns();
   } 
   else if (playerScore == 5) {
       finalScore.textContent = "FINAL SCORE: You win";
       deactivateBtns();
   }
}

function deactivateBtns() {
    let actionBtns = document.querySelectorAll(".action-btns button");
    actionBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.cssText = 'border: none';
    });
}

// Buttons
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let rockBtn = document.getElementById("rock-btn");
let refreshBtn = document.getElementById("refresh-btn");

paperBtn.addEventListener('click', () => playRound("paper"));
scissorsBtn.addEventListener('click',  () => playRound("scissors"));
rockBtn.addEventListener('click',  () => playRound("rock"));
refreshBtn.addEventListener('click',  () =>  {
    window.location.reload();
});

function game() {
    // for (i = 0; i < 5; i++) {
    //     let pSelection = prompt("Play (paper, scisors or rock?)");
    //     playRound(pSelection, computerPlay());
    // }

    // let pSelection = prompt("Play (paper, scisors or rock?)");
    //     playRound(pSelection, computerPlay());
    // console.log("FINAL SCORE: " + "Computer: " + computerScore + ", You: " + playerScore )
}


// game(); e.

// For Testing
// const playerSelection = "rock";
// const computerPLayFunc = computerPlay();
// console.log(playRound(playerSelection, computerPLayFunc));