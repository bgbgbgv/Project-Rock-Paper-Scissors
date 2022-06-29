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

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalizeString(playerSelection);
    if (playerSelection == 'Rock' && computerSelection == "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == "Rock") {
        return `Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Paper") {
        return `Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Scissors") {
        return `Draw! ${playerSelection} equals to ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
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

console.log(game());