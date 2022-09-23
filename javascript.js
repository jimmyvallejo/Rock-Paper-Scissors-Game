
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = computerPlay();


let playerSelection = prompt("Make your selection, Rock, paper or Scissors").toLowerCase();

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




function game(){
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Make your selection, Rock, paper or Scissors").toLowerCase();
        playRound(playerSelection, computerSelection)
    } 
}
   
game();



console.log(playRound(playerSelection,computerSelection));







