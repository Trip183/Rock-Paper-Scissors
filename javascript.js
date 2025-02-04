let humanScore = 0; 
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
     let answer = Math.floor(Math.random() * 3);
     return choices[answer];
}

function getHumanChoice () {
    let x = parseInt(prompt("Please choose a number between 1 and 3"));

    if (x < 1 || x > 3 || isNaN(x)) {
        alert("Invalid choice! Please enter 1, 2, or 3.");
        return getHumanChoice(); // Ask again if input is invalid
    }

    return choices[x - 1];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound (humanSelection, computerSelection) {
    
        // Checking for valid inputs
        const validChoices = ["rock", "paper", "scissors"];
        if (!validChoices.includes(humanSelection)) {
            return "Invalid choice! Please choose rock, paper, or scissors.";
        }
    
        // Game logic
        if (humanSelection === computerSelection) {
            return "It's a tie!";
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            return "You win! " + humanSelection + " beats " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " beats " + humanSelection;
        }
    }
    
    console.log(playRound(humanSelection, computerSelection));

    
