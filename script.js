let computerPlay = () => {
    let randomNumber = (Math.floor(Math.random() * 3)) + 1;

    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

capitalizeString = s => s[0].toUpperCase() + s.substr(1).toLowerCase();

function playerPlay() {
    let choice = capitalizeString(prompt("Please enter your Item (Rock, Paper or Scissors)", "Paper"));
    if (choice == null) {
        choice = "Paper";
    }

    return choice;
}



function playRound(playerChoise, computerSelection) {

    let playerSelection = capitalizeString(playerChoise);
    if (playerSelection == 'Rock' && computerSelection == "Scissors") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == "Paper") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == "Rock") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Scissors") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Paper") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Rock") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Scissors") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Paper") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Rock") {
        return `Your choice is ${playerSelection}, Computer selects ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) { //

        let playerChoise = playerPlay();
        let computerSelection = computerPlay();
        let round = playRound(playerChoise, computerSelection);
        console.log("Round " + (i + 1) + ": ", round);
        let _ = round.substr(0, 7);
        if (_ == "You Win") {
            playerWins++;
        } else if (_ == "You Los")
            computerWins++;
    }
    if (computerWins > playerWins) {
        return "Computer wins the game!";
    } else if (computerWins < playerWins) {
        return "Player wins the game!";
    } else {
        return "Draw!";
    }
}

let run = 0;
let computerWins = 0;
let playerWins = 0;
let textContent;


// Bind the HTML-Objects
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');



const body = document.querySelector('body');





rockButton.addEventListener('click', () => {
    if (run < 5) {
        run++;
        let round = playRound('Rock', computerPlay());
        console.log(round);
        let _ = round.substr(44, 7);
        console.log(_);
        if (_ == "rs. You") {
            playerWins++;
        } else if (_ == " You Lo") {
            computerWins++;
        }
        textContent = "Round " + run + ". " + round;
        const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = textContent;

    body.appendChild(content);
        if (run === 5) {
            if (computerWins > playerWins) {
                textContent =  "Game Over! Computer wins the game!";
            } else if (computerWins < playerWins) {
                textContent =  "Game Over! Player wins the game!";
            } else {
                textContent = "Game Over! Draw!";
            }
            const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = textContent;

    body.appendChild(content);
        }


    } else {
        console.log("Game is already over!")
    }
    console.log(`Player:${playerWins} - Computer_${computerWins}`);
});

paperButton.addEventListener('click', () => {
    if (run < 5) {
        run++;
        let round = playRound('paper', computerPlay());
        console.log(round);
        let _ = round.substr(44, 7);
        console.log(_);
        if (_ == "rs. You") {
            playerWins++;
        } else if (_ == " You Lo") {
            computerWins++;
        }
        textContent = "Round " + run + ". " + round;
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = textContent;

        body.appendChild(content);
        if (run === 5) {
            if (computerWins > playerWins) {
                textContent =  "Game Over! Computer wins the game!";
            } else if (computerWins < playerWins) {
                textContent =  "Game Over! Player wins the game!";
            } else {
                textContent = "Game Over! Draw!";
            }
            const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = textContent;

    body.appendChild(content);
        }


    } else {
        console.log("Game is already over!")
    }
    console.log(`Player:${playerWins} - Computer_${computerWins}`);
});
scissorsButton.addEventListener('click', () => {
    if (run < 5) {
        run++;
        let round = playRound('scissors', computerPlay());
        console.log(round);
        let _ = round.substr(44, 7);
        console.log(_);
        if (_ == "rs. You") {
            playerWins++;
        } else if (_ == " You Lo") {
            computerWins++;
        }
        textContent = "Round " + run + ". " + round;
        const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = textContent;

    body.appendChild(content);
        if (run === 5) {
            if (computerWins > playerWins) {
                textContent =  "Game Over! Computer wins the game!";
            } else if (computerWins < playerWins) {
                textContent =  "Game Over! Player wins the game!";
            } else {
                textContent = "Game Over! Draw!";
            }
            const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = textContent;

    body.appendChild(content);
        }


    } else {
        console.log("Game is already over!")
    }
    console.log(`Player:${playerWins} - Computer_${computerWins}`);
});

//console.log(game());