function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber <0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper or scissors:");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        alert(`It's a tie! You both chose ${humanChoice}.`);
        return;
    }

    let resultMessage = "";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        resultMessage = "Rock smashes Scissors! You win!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultMessage = "Rock smashes Scissors! Computer wins!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultMessage = "Paper covers Rock! You win!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        resultMessage = "Paper covers Rock! Computer wins!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultMessage = "Scissors cuts Paper! You win!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultMessage = "Scissors cuts Paper! Computer wins!";
        computerScore++;
    }

    alert(resultMessage);
    alert(`Score - You; ${humanScore}, Computer; ${computerScore}`);
}

for (let i = 0; i <5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

    let finalMessage = "-- GAME OVER --\n\n";
    if (humanScore > computerScore) {
        finalMessage += "Congratulations! You won the game!";
    } else if (computerScore > humanScore) {
        finalMessage += "Sorry, the computer won the game!";
    } else {
        finalMessage += "It's a tie game!";
    }
    
    alert(finalMessage);
}

playGame();
