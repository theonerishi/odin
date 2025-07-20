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
let humanScore = 0;
let computerScore = 0;
let div = document.querySelector("div");
function humanWins() {
    humanScore += 1;
    div.innerText += "Human won this round\n";
}
function computerWins() {
    computerScore += 1;
    div.innerText += "Computer won this round\n";
}
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let humanSelection = "";
let roundCounter = 0;
function playRound() {
    let computerSelection = getComputerChoice().toLowerCase();
    div.innerText += "Human Selection: " + humanSelection + "\nComputer Selection: " + computerSelection + "\n";
    if (humanSelection == computerSelection) {
        div.innerText += "It was a tie\n";
    } else if (humanSelection == "rock" && computerSelection == "paper") {
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
    }

    roundCounter++;
    if(roundCounter == 5) {
        div.innerText += "Human Score: " + humanScore + "\nComputer Score: " + computerScore + "\n"; 
        if(humanScore > computerScore) {
            div.innerText += "Human wins the game\n";
        } else if (computerScore > humanScore) {
            div.innerText += "Computer wins the game\n";
        } else {
            div.innerText += "This game is a tie\n";
        }
    }
}
rock.addEventListener("click", () => {
    humanSelection = "rock";
    playRound();
})
paper.addEventListener("click", () => {
    humanSelection = "paper";
    playRound();
})
scissors.addEventListener("click", () => {
    humanSelection = "scissors";
    playRound();
})


