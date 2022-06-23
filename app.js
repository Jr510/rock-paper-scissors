// Randomly return "Rock", "Paper", or "Scissors" for Computer

function computerPlay() {
  let cpuNumber  = Math.floor(Math.random() * 3) + 1;

  if(cpuNumber === 1) {
    console.log("Rock");
  } else if(cpuNumber === 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

