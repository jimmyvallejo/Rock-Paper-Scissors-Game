let choice = Math.floor(Math.random() * 3 + 1);

let computerScore = 0;
let playerScore = 0;



let playerSelection = window.prompt("Make your selection: Rock, Paper, or Scissors.").toLowerCase();

function getComputerChoice(choice){
    if (choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper";
    } else if (choice === 3){
        return "scissors";
    }
}

let computerSelection = getComputerChoice(choice);


function playRound(playerSelection, computerSelection){

    
    if (playerSelection == computerSelection){
        return "Its a Tie! Go again.";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
          
        return "You win! Rock beats Scissor";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        
        return "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        
        return "You lose! Rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        
        return "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        
        return "You lose! Scissors beats rock";
    }
}







function endGame(){
    if (playerScore > computerScore){
        console.log("Congratulations, you won!");
    } else console.log("Game over, you Lost!")
}


 function game(){
    if (playerScore < 5 && computerScore < 5){
        playRound(playerSelection, computerSelection);
    } else {
        endGame();
    }
 }

 game();

 console.log(game());
 console.log(playRound(playerSelection,computerSelection));
 console.log(computerScore);
 console.log(playerScore);