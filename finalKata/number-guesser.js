let prompt = require("prompt-sync")();

// code below (replace this example)
function randomNumber() {
  return Math.floor((Math.random()*100) +1)
}

function newGuess() {
  return Number(prompt("Guess a number: "));
}


function isGuessValid(guess) {
  //is guess a number?
  console.log("type of guess is: " + typeof guess)
  if (!guess) {
    console.log("Not a number! Try again!");
    return false;
  } else if (attempts.indexOf(guess) !== -1) {
    //has guess been guessed before?
    console.log("Already Guessed!!")
    return false
  } else {
    //valid guess so add guess to previous attemps and return true
    attempts.push(guess);
    return true;
  }
}

function checkGuess(guess) {
  if (currentGuess === correctAnswer) {
    console.log(`You got it! You only took ${attempts.length} attempts.`)
    gameOver = true;
  } else if (currentGuess < correctAnswer){
    console.log("Too Low!")
  } else if (currentGuess > correctAnswer){
    console.log("Too High!")
  }
}


//start game
// generate correctAnswer, initialize variables


let correctAnswer;
let currentGuess;
let attempts;
let gameOver = false;
let valid;
let retry = true;

function playGame(){
  correctAnswer = randomNumber();
  attempts = [];
  gameOver = false;
  while(gameOver === false){
  //ask user for newGuess
    currentGuess = newGuess();
  //checkGuess
    valid = isGuessValid(currentGuess)
    if (valid) {
      //compare currentGuess to correctAnswer
      checkGuess(currentGuess)
    } 
  }

}

while (retry){
  playGame();
  let playAgain = prompt("Play Again? (y/n):")
  if (playAgain === 'n'){
    retry = false;
  }
}