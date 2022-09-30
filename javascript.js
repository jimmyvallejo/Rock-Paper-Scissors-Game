
// Declare initial score of player and computer//

let playerScore = 0;
let computerScore = 0;

// Function in order to get computer input randomly from an array//

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = '';
computerSelection = computerPlay();


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");


btn1.addEventListener('click', () => {playRound("rock", computerSelection)});
btn2.addEventListener('click', () => {playRound("paper", computerSelection)});
btn3.addEventListener('click', () => {playRound("scissors", computerSelection)});

const paragraph = document.querySelector(".content");







// Function designed for a single round of rock paper scissors, increments count +1 depending on outcome//

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    
    if(playerScore == 5 || computerScore == 5){
        return endGame();
    }
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")){
        playerScore++;
        paragraph.textContent = "You win! " + playerSelection + " beats " + computerSelection + ", the score is Player: " + playerScore + " Computer: " + computerScore;
       } else if (playerSelection == computerSelection){
        paragraph.textContent = "Draw!";
       } else {
        computerScore++
        paragraph.textContent = "You lose! " + computerSelection+ ", beats " + playerSelection + " the score is Player: " + playerScore + " Computer: " + computerScore;
       }
}


// Function to display final results and reset game

function endGame(){
    if (playerScore == 5 && computerScore == 5){
        paragraph.textContent = "Draw Game! Press any button to play again."
       reset();
    } else if (playerScore == 5 && computerScore < 5){
        paragraph.textContent = "Congratulations you beat the machine! Press any button to play again."
        reset();
    } else if (playerScore < 5 && computerScore == 5){
       paragraph.textContent = "Wow you lost to a computer...Press any button to play again."
       reset();
    }
}


    

// Function to reset player and computer scores

function reset(){
    computerScore = 0;
    playerScore = 0;
}

























