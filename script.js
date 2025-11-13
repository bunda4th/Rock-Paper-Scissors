let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");
const playAgainBtn = document.getElementById("play-again");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber < 0.66) return "paper";
    else return "scissors";
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

    if (humanChoice === computerChoice) {
       resultMessage = `It's a tie! You both chose ${humanChoice}.`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultMessage = "Rock smashes Scissors! You win!";
        humanScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultMessage = "Rock smashes Scissors! Computer wins!";
        computerScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultMessage = "Paper covers Rock! You win!";
        humanScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        resultMessage = "Paper covers Rock! Computer wins!";
        computerScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultMessage = "Scissors cuts Paper! You win!";
        humanScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultMessage = "Scissors cuts Paper! Computer wins!";
        computerScore++;
    }

    resultsDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = "Congratulations! You won the game!";
        winnerDiv.style.color = "green";
    }
    else {
        winnerDiv.textContent = "Sorry! The computer won the game!";
        winnerDiv.style.color = "red";
    }

    document.querySelectorAll(".buttons button").forEach(btn =>btn.disabled = true);
    playAgainBtn.style.display = "inline-block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = "";
    scoreDiv.textContent = "";
    winnerDiv.textContent = "";
    document.querySelectorAll(".buttons button").forEach(btn => btn.disabled = false);
    playAgainBtn.style.display = "none";
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
playAgainBtn.addEventListener("click", resetGame);