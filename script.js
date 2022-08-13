"use strict";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0: 
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
}

function hasWon(selection1, selection2) {
    if (selection1 == selection2) {
        return 0
    }

    if (
        selection1 == 'rock' && selection2 == 'paper' ||
        selection1 == 'scissors' && selection2 == 'rock' ||
        selection1 == 'paper' && selection2 == 'scissors'
    ) {
        return -1;
    }

    return 1;
}

function playRound(playerSelection, computerSelection) {
    if (hasWon(playerSelection, computerSelection) == 0) {
        return 'Tie round'
    }

    if (hasWon(playerSelection, computerSelection) == -1) {
        computerScore++;
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }
    
    if (hasWon(playerSelection, computerSelection) == 1) {
        playerScore++;
        return `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
}

//let playerSelection1 = prompt('Insert your choice').toLocaleLowerCase();
//let computerSelection2 = getComputerChoice();

for (let i = 0; i < 5; i++) {
    let playerSelection1 = prompt('Insert your choice').toLocaleLowerCase();
    let computerSelection2 = getComputerChoice();
    let result = playRound(playerSelection1,computerSelection2);

    console.log(result);
    console.log(playerScore);
}
if (playerScore > computerScore) {
    console.log('You won a game');
}
else if (playerScore < computerScore) {
    console.log('You lose a game');
}
else {
    console.log('Tie game');
}
//rock