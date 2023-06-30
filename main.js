let playerScore = 0;
let computerScore = 0;
const compScore = document.querySelector('.computer-score');
const userScore = document.querySelector('.player-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const roundResult = document.querySelector('.round-result-p');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const modalText = document.querySelector('.modal-text');
const playAgain = document.querySelector('.play-again');

function getComputerChoice(){
    const randomMoves = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * randomMoves.length);
    return randomMoves[index];
}

function gameRound(playerSelection){
    const computerSelection = getComputerChoice();
    
    if(playerSelection === computerSelection){
        roundResult.textContent = "It's a tie!!"
    }
    if((playerSelection === 'rock' && computerSelection === 'scissor') || 
       (playerSelection === 'paper' && computerSelection === 'rock') || 
       (playerSelection === 'scissor' && computerSelection === 'paper')) {
        playerScore++
        userScore.textContent = playerScore;
        compScore.textContent = computerScore;
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`
       }
    if((computerSelection === 'rock' && playerSelection === 'scissor') || 
       (computerSelection === 'paper' && playerSelection === 'rock') || 
       (computerSelection === 'scissor' && playerSelection === 'paper')) {
        computerScore++
        compScore.textContent = computerScore;
        userScore.textContent = playerScore;
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    if(playerScore === 5 || computerScore === 5){
        endGame();
    }
}


function clickEvent(){
    rock.addEventListener('click', function(){
        gameRound("rock");
    })

    paper.addEventListener('click', function(){
        gameRound("paper");
    })

    scissor.addEventListener('click', function(){
        gameRound("scissor");
    })
    playAgain.addEventListener('click', restartGame);
}
clickEvent();

function endGame(){
    if(playerScore === 5){
        modal.style.visibility = 'visible';
        overlay.style.visibility = 'visible';
        modalText.textContent = "You won the game! Thank you for saving the humanity against computers.";
    } else if (computerScore === 5){
        modal.style.visibility = 'visible';
        overlay.style.visibility = 'visible';
        modalText.textContent = "You lost! Humanity is doomed...";
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    compScore.textContent = computerScore;
    userScore.textContent = playerScore
    modal.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
    roundResult.textContent = "";
}

