console.log("Hello World!");
function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3);
    switch(rnd) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice;
}
function humanWins() {
    humanScore += 1;
    alert("human won this round");
}
function computerWins() {
    computerScore += 1;
    alert("computer wins this round");
}
let humanScore = 0;
let computerScore = 0;
function playRound() {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (humanSelection == "rock" && computerSelection == "paper") {
        computerWins();
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        humanWins();
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerWins();
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        humanWins();
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        humanWins();
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
        computerWins();
    } else {

    }
}
function playGame() {
    for (let i = 0; i < 3; i++) {
        playRound();
    }
    if(humanScore > computerScore) {
        alert("human wins the game");
    } else if (computerScore > humanScore) {
        alert("computer wins the game");
    } else {
        alert("tie");
    }
}
playGame();
