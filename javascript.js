
// Declare initial score of player and computer//

let playerScore = 0;
let computerScore = 0;


// Function designed for a single round of rock paper scissors, increments count +1 depending on outcome//

function playRound(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")){
        playerScore++;
        return ("You win! " + playerSelection + " beats " + computerSelection + ", the score is Player:" + playerScore + " Computer:" + computerScore);
       } else if (playerSelection == computerSelection){
        return "Draw!"
       } else {
        computerScore++
        return ("You lose! " + computerSelection+ ", beats " + playerSelection + " the score is Player:" + playerScore + " Computer:" + computerScore)
       }
}

// Function in order to get computer input randomly from an array//

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = computerPlay();


//Prompt in order to get user selection of (Rock, paper, or scissors)//

let playerSelection = prompt("Make your selection, Rock, paper or Scissors").toLowerCase();

//Function that plays a round of rock paper scissors until either CPU or user reaches 5//

function game(){
    
    while (playerScore < 5 && computerScore < 5){
        
        /*Variables redeclared inside while loop in order to get user 
        input per round and random computer input*/
        
        let playerSelection = prompt("Make your selection, Rock, paper or Scissors").toLowerCase();
        let computerSelection = computerPlay();
        
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore == 5 && computerScore == 5){
            console.log("Draw! Refresh the page to try again.");
        } else if (playerScore == 5 && computerScore < 5){
            console.log("You Win! You Saved the world. Refresh to play again.")
        } else if (playerScore < 5 && computerScore == 5) {
            console.log("You lost :( Refresh the page to try again.")
        }
    } 
}
   




console.log(game());







