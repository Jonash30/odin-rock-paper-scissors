let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomMoves = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * randomMoves.length);
    return randomMoves[index];
}

function gameRound(playerSelection, computerSelection){
    
    
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++
        return "You Lose! Scissor beats Paper"
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore++
        return "You Win! Scissor beats Paper"
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore++
        return "You Lose! Rock beats Scissor"
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++
        return "You Win! Rock beats Scissor"
    } else {
        return "Its a tie!"
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice: ").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(gameRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        
        
    }

    console.log("Final Score:");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}
game();