// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));
// // expected output: 0, 1 or 2

let computerPlay = () => {
    let randomNumber = (Math.floor(Math.random() * 3)) + 1;
    //  console.log(randomNumber);
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// let scissorsCount = 0;
// let rochCount = 0;
// let paperCount = 0;
// for (let i = 0; i < 300000; i++) {
//     let tmp = computerPlay();
//     if (tmp == "Rock"){
//         rochCount++;
//     } else if (tmp == "Paper") {
//         paperCount++;

//     } else {
//         scissorsCount++;
//     }
//     // console.log("Iteration " + i + " " + tmp);
//   }
//   console.log("Rock: " + rochCount + " | Scissors: " + scissorsCount + " | " + "Paper: " + paperCount);


/*
 Write a function that plays a single round of Rock Paper Scissors.
 The function should take two parameters - the playerSelection 
 and computerSelection - and then return a string that declares 
 the winner of the round like so: "You Lose! Paper beats Rock"

    a)  Make your function’s playerSelection parameter 
        case-insensitive (so users can input rock, ROCK,
         RocK or any other variation).

*/

capitalizeString = s => s[0].toUpperCase() + s.substr(1).toLowerCase();

function playerPlay() {
    let choice = capitalizeString(prompt("Please enter your Item (Rock, Paper or Scissors)", "Paper"));
    if (choice == null) {
        choice = "Paper";
    }

    return choice;
}


function playRound(playerSelection, computerSelection) {
    // your code here!
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

//   Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 


function game() {
    let computerWins = 0;
    let playerWins = 0;


    for (let i = 0; i < 5; i++) {
        // your code here!
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log("Round "+ (i+1) + ": ", round);
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





//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));


//           computerWins++;      playerWins++;

// let computerWins = 0;
// let playerWins = 0;

// while (computerWins < 5 && playerWins < 5) {
//     let computerSelection = computerPlay();
//     


// }

// if(computerWins == 5)
//     console.log("Computer has win 5 rounds!");
// else
//     console.log("Player has win 5 rounds!")





// console.log("Computer: " + computerSelection + " - You: " + playerSelection);
// computerSelection
// console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
// `You Lose! ${computerSelection} beats ${playerSelection}`
// console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);   