function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2

let computerPlay = () => {
    let randomNumber = (Math.floor(Math.random() * 3)) + 1;
    //  console.log(randomNumber);
    if (randomNumber == 1){
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

capitalizeString = s => s[0].toUpperCase()+s.substr(1).toLowerCase();

function playerPlay() {
    let choice = capitalizeString(prompt("Please enter your Item (Rock, Paper or Scissors)", "Paper"));
    if (choice == null) {
        choice = "Paper";
    }

    return choice;
}
let computerSelection = computerPlay();
let playerSelection = playerPlay();

if ( playerSelection == 'Rock' && computerSelection == "Scissors") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
} else if (playerSelection == 'Rock' && computerSelection == "Paper") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
} else if ( playerSelection == 'Rock' && computerSelection == "Rock") {
    console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);   
} else if ( playerSelection == 'Paper' && computerSelection == "Scissors") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
} else if (playerSelection == 'Paper' && computerSelection == "Paper") {
    console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);   
} else if ( playerSelection == 'Paper' && computerSelection == "Rock") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
} else if ( playerSelection == 'Scissors' && computerSelection == "Scissors") {
    console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);   
} else if (playerSelection == 'Scissors' && computerSelection == "Paper") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
} else if ( playerSelection == 'Scissors' && computerSelection == "Rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
} 



// console.log("Computer: " + computerSelection + " - You: " + playerSelection);
// computerSelection
// console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
// `You Lose! ${computerSelection} beats ${playerSelection}`
// console.log(`Draw! ${playerSelection} equals to ${computerSelection}`);   