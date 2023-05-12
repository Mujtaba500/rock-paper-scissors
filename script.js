

let winCounter = 0
let tieCounter = 0

function game(playerSelection, computerSelection){
    // FOR LOOP used for 5 rounds
    for( i = 0; i < 5; i++){
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
        
        let computerSelection = getComputerChoice()
        let playerSelection = prompt('Rock Paper or Scissors?').toLowerCase()  

    if( computerSelection === "rock" && playerSelection === "scissors" ){
        console.log(("You LOST! Rock beats Scissors" ))
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        console.log(("You LOST! Paper beats Rock"))  
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        console.log(("You LOST! Scissors beat Paper"))
    }
    else if(computerSelection === playerSelection){
        console.log(("Its a TIE"))
        tieCounter++
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Won this round! Rock beats Scissors")
        winCounter++
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Won this round! Scissors beat paper")
        winCounter++
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Won this round! Paper beats rock")
        winCounter++
    }
    else {
        console.log(("You lost because of incorrect spelling"))
       
    }
}
}

//Call function
game()

let lossCounter = 5 - winCounter - tieCounter

// Display the results after 5 rounds
if( winCounter > 2){
    alert(`You are the winner! You won ${winCounter} rounds out of 5`)
    console.log(`Congrats! You won ${winCounter} rounds out of 5`)
}
else{
    alert(`You LOST ${lossCounter} rounds to a machine!`)
    console.log(`You LOST ${lossCounter} rounds to a machine!`)
}



