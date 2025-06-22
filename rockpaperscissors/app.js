console.log("Hello World!");
function getComputerChoice() {
    int rnd = Math.floor(Math.random() * 3);
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
    console.log("Computer choice: " + getComputerChoice());
}
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors:");
    console.log("Human choice: " + humanChoice());
}
let humanScore = 0;
let computerScore = 0;
function playRound() {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (humanSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        humanScore += 1;
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        humanScore += 1;
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        humanScore += 1;
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
    } else {

    }
}
function playGame() {
    for (let i = 0; i < 3; i++) {
        playRound();
    }
    if(humanScore > computerScore) {
        alert("human wins");
    } else if (computerScore > humanScore) {
        alert("computer wins");
    } else {
        alert("tie");
    }
}
