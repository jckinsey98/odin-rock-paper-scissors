let humanScore = 0;
let computerScore = 0;

getComputerChoice = () =>{                                                                                        
  const computerSelection = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
  return computerChoice                          
};

getHumanChoice = () => {
let humanChoice = prompt("Rock, paper, scissors?").toUpperCase();
return humanChoice;
}

playRound = (computerChoice, humanChoice) => {
  if (computerChoice === humanChoice) {
    console.log("It's a draw.")
     console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
    computerScore++ 
    console.log("Paper covers rock. Computer wins.")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
    computerScore++ 
    console.log("Rock beats scissors. Computer wins.")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
    computerScore++ 
    console.log("Scissors cut paper. Computer wins.")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
    humanScore++ 
    console.log("Paper covers rock. You win!")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "PAPER" && humanChoice === "SCISSORS") {
    humanScore++ 
    console.log("Scissors cut paper. You win!")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  } else if (computerChoice === "SCISSORS" && humanChoice === "ROCK") {
    humanScore++ 
    console.log("Rock beats scissors. You win!")
    console.log(`Your score:${humanScore} Computer score:${computerScore}`)
  }
}

playGame = (humanChoice, computerChoice) => {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  playRound(humanSelection, computerSelection);

}

while (humanScore < 5 && computerScore < 5){
    playGame();

    if (humanScore === 5) {
        console.log("Congratulations! You win!");
        break;
    } else if (computerScore === 5) {
        console.log("Computer wins. Better luck next time.")
        break;
    }
}