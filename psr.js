let computerScore = 0;
let playerScore = 0; 
let gameOver = false;

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
    
    const loseResponses = ["Sorry Mate! You lose!", "You Lose! Better luck next time buddy!", 
        "You Lose! Hey...you tried your best"];
    let lossResponse = loseResponses[Math.floor(Math.random() * loseResponses.length)];

    const winResponses = ["Congratulations Dude! You are the Victor!", "Wow...you're kinda good at this! You Win!", 
        "Gold medal! You are victorious!"];
    let winResponse = winResponses[Math.floor(Math.random() * winResponses.length)];

   if (computerScore == 5) {
       finalScore.textContent = lossResponse;
       finalScore.style.visibility = "visible";
       deactivateBtns();
   } 
   else if (playerScore == 5) {
       finalScore.textContent = winResponse;
       finalScore.style.visibility = "visible";
       deactivateBtns();
   }
   resizeActionButtons();
}

const actionBtns = document.querySelectorAll(".action-btns button");

function deactivateBtns() {
    actionBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.transform = 'scale(1)';
        btn.style.background = "#8080808c";
        btn.style.cursor = 'auto';
    });
    gameOver = true;
}

// Buttons
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const rockBtn = document.getElementById("rock-btn");
const refreshBtn = document.getElementById("refresh-btn");

paperBtn.addEventListener('click', () => playRound("paper"));
scissorsBtn.addEventListener('click',  () => playRound("scissors"));
rockBtn.addEventListener('click',  () => playRound("rock"));
refreshBtn.addEventListener('click',  () =>  {
    window.location.reload();
});

actionBtns.forEach( actionBtn => {
    if (gameOver != true) {
        actionBtn.onmouseover = () => actionBtn.style.transform = 'scale(1.2)';
        actionBtn.onmouseout = () => actionBtn.style.transform = 'scale(1)';
    }
});
