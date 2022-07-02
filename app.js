
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;


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

function playRound(playerSelection, computerSelection) {

  const gameDiv = document.createElement("div");
  const div1 = document.getElementById("play-buttons");
  computerSelection = computerPlay();

  if(playerSelection === computerSelection) {
      gameDiv.textContent = `It's a tie!  Player: ${playerScore}, Computer: ${computerScore}`; 
      div1.appendChild(gameDiv);

  } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
              playerSelection === "Scissors" && computerSelection === "Rock" || 
              playerSelection === "Paper" && computerSelection === "Scissors") {

      computerScore++;

      if (computerScore === 5) {

        gameDiv.textContent = `Computer Wins the Game!  Player: ${playerScore}, Computer: ${computerScore}`;
        gameDiv.style.color = "red";
        div1.appendChild(gameDiv);  
        resetScores();

      } else {

        gameDiv.textContent = `Computer Wins round!  Player: ${playerScore}, Computer: ${computerScore}`;
        div1.appendChild(gameDiv);

      }

  } else if (playerSelection === "Paper" && computerSelection === "Rock" ||
              playerSelection === "Rock" && computerSelection === "Scissors" ||
              playerSelection === "Scissors" && computerSelection === "Paper") {

      playerScore++;

      if (playerScore === 5) {

        gameDiv.textContent = `Player Wins the Game!  Player: ${playerScore}, Computer: ${computerScore}`;
        gameDiv.style.color = "green";
        div1.appendChild(gameDiv);  
        resetScores();

      } else {

        gameDiv.textContent = `Player Wins round!  Player: ${playerScore}, Computer: ${computerScore}`;
        div1.appendChild(gameDiv);   

      }
  }
}

function resetScores() {

  computerScore = 0;
  playerScore = 0;
  
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  
  button.addEventListener('click', () => {

    playerSelection = button.id;

    playRound(playerSelection, computerSelection);

  });

});