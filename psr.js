// Computer play function (randomly returns rock, paper or scissors)
function computerPlay() {
    let plays = ["paper", "scissors", "rock"];
    let computersPlay = plays[Math.floor(Math.random() * actions.length)];
    return computersPlay;
}

function playRound(playerSelection, computerSelection) {
    // plays are identical
    // rock paper
    // rock scissors
    // paper rock
    // paper scissors
    // scissors paper
    // scissors rock
}