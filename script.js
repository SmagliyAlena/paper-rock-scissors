function playRound() {
    let playerSelection = (prompt('Введите свою фигуру')).toLocaleLowerCase();
    function getComputerChoice() {
        let c;
        let i = Math.floor(Math.random() * 3);
        if (i === 0) {
            c = 'rock';
        }
        else if (i === 1) {
            c = 'paper';
        }
        else if (i === 2) {
            c = 'scissors';
        }
        return c;
        } 
    let computerChoice = getComputerChoice();
    let result
    let winsCount
    switch (true) {
        case (playerSelection == computerChoice):
            result = 'Draw';
            winsCount = 0
            break;
        case (playerSelection == 'rock') && (computerChoice == 'paper'):
            result = 'You Lose! Paper beats Rock'
            winsCount = 0
            break;
        case (playerSelection == 'scissors') && (computerChoice == 'rock'):
            result = 'You Lose! Rock beats Scissors'
            winsCount = 0
            break;
        case (playerSelection == 'paper') && (computerChoice == 'scissors'):
            result = 'You Lose! Scissors beats Paper'
            winsCount = 0
            break;
        case (playerSelection == 'paper') && (computerChoice == 'rock'):
            result = 'You Won! Paper beats Rock'
            winsCount = 1
            break;
        case (playerSelection == 'rock') && (computerChoice == 'scissors'):
            result = 'You Won! Rock beats Scissors'
            winsCount = 1
            break;
        case (playerSelection == 'scissors') && (computerChoice == 'paper'):
            result = 'You Won! Scissors beats Paper'
            winsCount = 1
            break;
    }
    return result
    return winsCount
}
//console.log(playRound())
let gameScore = 0
function game() {
    for (let i=0; i<5; i++) {
        console.log(playRound(i))
        
    }
    gameScore =  gameScore + winsCount
    return gameScore
}
console.log(game())
//console.log(gameScore)


//rock