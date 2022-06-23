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

// Player against Computer and return outcome

function playRound(playerSelection, computerSelection) {

  const playerChoice = playerSelection.toLowerCase();
  const newPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerSelection = computerPlay();

  if(newPlayerChoice === computerSelection) {
    console.log(`It's a tie!  ${newPlayerChoice} and ${computerSelection}`);

  } else if (newPlayerChoice === "Rock" && computerSelection === "Paper") {
    console.log(`Computer Wins!  ${computerSelection} covers ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Paper" && computerSelection === "Rock") {
    console.log(`Player Wins!  ${newPlayerChoice} covers ${computerSelection}!`);

  } else if (newPlayerChoice === "Scissors" && computerSelection === "Rock") {
    console.log(`Computer Wins!  ${computerSelection} breaks ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Rock" && computerSelection === "Scissors") {
    console.log(`Player Wins!  ${newPlayerChoice} breaks ${computerSelection}!`);

  } else if (newPlayerChoice === "Paper" && computerSelection === "Scissors") {
    console.log(`Computer Wins!  ${computerSelection} cuts ${newPlayerChoice}!`);

  } else if (newPlayerChoice === "Scissors" && computerSelection === "Paper") {
    console.log(`Player Wins!  ${computerSelection} cuts ${newPlayerChoice}!`);
  }

}