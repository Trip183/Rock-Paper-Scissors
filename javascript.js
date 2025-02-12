let humanScore = 0; 
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
     let answer = Math.floor(Math.random() * 3);
     return choices[answer];
}



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
    

    const rock = document.querySelector("#btn-R");
    const paper = document.querySelector("#btn-P");
    const scissors = document.querySelector("#btn-S");

    rock.addEventListener("click", () => 
        console.log(playRound("rock", getComputerChoice())));

    paper.addEventListener("click", () => {
        console.log(playRound("paper", getComputerChoice()));
    });
    
    scissors.addEventListener("click", () => {
        console.log(playRound("scissors", getComputerChoice()));
    });


    