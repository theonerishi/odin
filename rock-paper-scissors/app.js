function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3); // find a random number between 0 up to but not including 3
    switch(rnd) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    } // make computer choice based on random value generated
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
} // if computer / human wins increment score and display message
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors"); // select buttons
let humanSelection = "";
let roundCounter = 0;
function playRound() {
    let computerSelection = getComputerChoice().toLowerCase();
    div.innerText += "Human Selection: " + humanSelection + "\nComputer Selection: " + computerSelection + "\n"; // display choices
    if (humanSelection == computerSelection) { // game logic using if statements
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
    } // display who won after counter reaches value
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
}) // when button clicked make human selection and play round


