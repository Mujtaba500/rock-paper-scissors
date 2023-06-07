
let result = document.querySelector('#result')
let playerSels = document.querySelectorAll('.player-sel')
let winCount = document.querySelector('#win-count')
let lossCount = document.querySelector('#loss-count')
Array.from(playerSels).forEach(element => element.addEventListener('click', game))
let winCounter = 0
let lossCounter = 0

function playerInput(input){
    playerSelection = input
}

function game(){
        if( winCounter >= 5){
        result.textContent = "Congrats! You are the winner!";
         return;
        }
        else if( lossCounter >= 5){
            result.textContent = "You just lost to a machine! That's just sad";
             return;
        }
        function getComputerChoice(){  // randomly generated answer by computer
            let x = Math.floor(Math.random() * 3)
            if( x === 0){
                return "rock"
            }
            else if( x === 1){
                return "paper"
            }
            else if( x === 2){
                return "scissors"
            }
        }
        
         computerSelection = getComputerChoice()

    if( computerSelection === "rock" && playerSelection === "scissors" ){
        result.textContent = "You LOST this round! Rock beats Scissors" 
        lossCounter++
        lossCount.textContent = `Computer score: ${lossCounter}`
        
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        result.textContent =  "You LOST this round! Paper beats Rock"
        lossCounter++
        lossCount.textContent = `Computer score: ${lossCounter}`
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        result.textContent = "You LOST this round! Scissors beat Paper"
        lossCounter++
        lossCount.textContent = `Computer score: ${lossCounter}`
    }
    else if(computerSelection === playerSelection){
        result.textContent = "Its a TIE"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent = "You Won this round! Rock beats Scissors"
        winCounter++
        winCount.textContent = `Player score: ${winCounter}`
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        result.textContent = "You Won this round! Scissors beat paper"
        winCounter++
        winCount.textContent = `Player score: ${winCounter}`
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        result.textContent = "You Won this round! Paper beats rock"
        winCounter++
        winCount.textContent = `Player score: ${winCounter}`
    }
    if( winCounter >= 5){
        result.textContent = "Congrats! You are the winner!";
        return;
        }
    else if( lossCounter >= 5){
            result.textContent = "You just lost to a machine! That's just sad";
            return;
        }
}



