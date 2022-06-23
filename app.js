
let computerScore = 0;
let playerScore = 0;

// Randomly return "Rock", "Paper", or "Scissors" for Computer

function computerPlay() {
  const cpuNumber  = Math.floor(Math.random() * 3) + 1;

  if(cpuNumber === 1) {
    return "Rock";
  } else if(cpuNumber === 2) {
    return "Paper";
  } else if (cpuNumber === 3) {
    return "Scissors";
  }
}

// Prompt Player to choose answer against Computer and return outcome

function playRound(playerSelection, computerSelection) {

  const playerChoice = prompt("Welcome to Rock, Paper, or Scissors! Good luck! (Best out of 5)", playerSelection).toLowerCase();
  const newPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerSelection = computerPlay();

  if(newPlayerChoice === computerSelection) {
    console.log(`It's a tie!  ${newPlayerChoice} and ${computerSelection}`); 

  } else if (newPlayerChoice === "Rock" && computerSelection === "Paper") {
    computerScore++;
    console.log(`Computer Wins!  ${computerSelection} covers ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Paper" && computerSelection === "Rock") {
    playerScore++;
    console.log(`Player Wins!  ${newPlayerChoice} covers ${computerSelection}!`);

  } else if (newPlayerChoice === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    console.log(`Computer Wins!  ${computerSelection} breaks ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    console.log(`Player Wins!  ${newPlayerChoice} breaks ${computerSelection}!`);

  } else if (newPlayerChoice === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    console.log(`Computer Wins!  ${computerSelection} cuts ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    console.log(`Player Wins!  ${computerSelection} cuts ${newPlayerChoice}!`);
  }

}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if(playerScore < computerScore) {
    console.log("********************");
    console.log("PlayerWins!");
    console.log("********************");
  } else if(computerScore > playerScore) {
    console.log("********************");
    console.log("Computer Wins!");
    console.log("********************");
  } else {
    console.log("********************");
    console.log("Tie Game!");
    console.log("********************");
  }
}