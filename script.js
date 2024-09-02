function getComputerChoice() {
    value = Math.random();
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
    let result = document.querySelector('#result');

    if (humanChoice === computerChoice) {
        result.textContent = "It's a draw!"; 
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result.textContent = "You lose! Paper beats Rock"; 
            // computerScore++;
        } else {
            result.textContent = "You win! Rock beats Scissors"; 
            // humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            result.textContent = "You lose! Scissors beats Paper"; 
            // computerScore++;
        } else {
            result.textContent = "You win! Paper beats Rock"; 
            // humanScore++;
        }
    } else {
        if (computerChoice === "rock") {
            result.textContent = "You lose! Rock beats Scissors"; 
            // computerScore++;
        } else {
            result.textContent = "You win! Scissors beats Paper"; 
            // humanScore++;
        }
    }
}
    
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === computerChoice) {
//             console.log("It's a draw!"); 
//             return;
//         }
//         if (humanChoice === "rock") {
//             if (computerChoice === "paper") {
//                 console.log("You lose! Paper beats Rock"); 
//                 computerScore++;
//             } else {
//                 console.log("You win! Rock beats Scissors"); 
//                 humanScore++;
//             }
//         } else if (humanChoice === "paper") {
//             if (computerChoice === "scissors") {
//                 console.log("You lose! Scissors beats Paper"); 
//                 computerScore++;
//             } else {
//                 console.log("You win! Paper beats Rock"); 
//                 humanScore++;
//             }
//         } else {
//             if (computerChoice === "rock") {
//                 console.log("You lose! Rock beats Scissors"); 
//                 computerScore++;
//             } else {
//                 console.log("You win! Scissors beats Paper"); 
//                 humanScore++;
//             }
//         }
//     }

//     for (let i=0; i<5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore > computerScore) {
//         console.log("Congratulations! You are the winner!")
//     } else if (humanScore < computerScore) {
//         console.log("You lost! Try again!")
//     } else {
//         console.log("It's a draw!")
//     }
// }

let btn1 = document.querySelector("#rock");
let btn2 = document.querySelector('#paper');
let btn3 = document.querySelector('#scissors');

btn1.addEventListener('click',(e) => {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

btn2.addEventListener('click',() => {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

btn3.addEventListener('click',() => {
    let computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});