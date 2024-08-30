let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    value = Math.random();
    console.log(value);
    if (value <= 1 / 3) {
        return "rock";
    } else if (value <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    value = prompt("What's your choice? (rock / paper / scissors)");
    return value.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!"); 
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock"); 
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors"); 
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper"); 
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock"); 
            humanScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors"); 
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper"); 
            humanScore++;
        }
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  