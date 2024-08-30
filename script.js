console.log("Hello World");

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