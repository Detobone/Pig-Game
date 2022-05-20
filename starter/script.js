'use strict';
// VARIABLES DECLARATIONS
let player1 = document.querySelector('.player.player--0'),
  player2 = document.querySelector('.player.player--1'),
  player = document.querySelector('.player'),
  btnNewGame = document.querySelector('.btn.btn--new'),
  btnRollDice = document.querySelector('.btn.btn--roll'),
  btnHold = document.querySelector('.btn.btn--hold'),
  dice = document.querySelector('.dice'), // ADD AND REMOVE CLASSLIST HIDDEN
  score1 = document.getElementById('score--0'), // This one it's working with ID
  score2 = document.getElementById('score--1'), // This one it's working with ID
  score = document.getElementById('score'), // This one it's working with ID
  current1 = document.getElementById('current--0'), // This one it's working with ID
  current2 = document.getElementById('current--1'), // This one it's working with ID
  name1 = document.getElementById('name--0'), // This one it's working with ID'; // This one it's working with ID
  name2 = document.getElementById('name--1'); // This one it's working with ID'; // This one it's working with ID

let randomNumber;
let playing = true;
// EVENT LISTENERS

btnRollDice.addEventListener('click', PigGame);
btnHold.addEventListener('click', fcHold);
btnNewGame.addEventListener('click', fcNewGame);

// GAME MATH LOGIC AND FUNCTIONS

//Change the image on the dice
function imgDiceNumber() {
  if (randomNumber === 1) dice.src = 'dice-1.png';
  if (randomNumber === 2) dice.src = 'dice-2.png';
  if (randomNumber === 3) dice.src = 'dice-3.png';
  if (randomNumber === 4) dice.src = 'dice-4.png';
  if (randomNumber === 5) dice.src = 'dice-5.png';
  if (randomNumber === 6) dice.src = 'dice-6.png';
  randomNumber; // I must delete this line when enter the function in the while
}
// Change the value bellow the player 1/2 (score))
function fcCurrent1() {
  current1.textContent = randomNumber + Number(current1.textContent);
}

function fcCurrent2() {
  current2.textContent = randomNumber + Number(current2.textContent);
}

function fcHold() {
  if (playing) {
    if (player1.classList.contains('player--active')) {
      if (randomNumber === 1) {
        score1.textContent;
      } else {
        score1.textContent =
          Number(current1.textContent) + Number(score1.textContent);
      }
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      current1.textContent = 0;
    } else if (player2.classList.contains('player--active')) {
      if (randomNumber === 1) {
        score2.textContent;
      } else {
        score2.textContent =
          Number(current2.textContent) + Number(score2.textContent);
      }
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      current2.textContent = 0;
    }
  }
}

function winCondition() {
  if (score1.textContent >= 100) {
    name1.textContent = 'Player1, you have won🏆💪';
    name2.textContent = 'Player2, you have lost👎😥';
    playing = false;
  } else if (score2.textContent >= 100) {
    name1.textContent = 'Player1, you have lost👎😥';
    name2.textContent = 'Player2, you have won🏆💪';
    playing = false;
  }
}

function fcNewGame() {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  dice.classList.add('hidden');
}

function PigGame() {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber);
  winCondition();
  dice.classList.remove('hidden');
  if (playing) {
    if (player1.classList.contains('player--active')) {
      imgDiceNumber();
      winCondition();
      if (randomNumber === 1) {
        fcHold();
        console.log('----------------Player1 turn----------------');
      } else if (randomNumber > 1 && randomNumber <= 6) {
        fcCurrent1();
      }
    } else {
      imgDiceNumber();
      winCondition();
      if (randomNumber === 1) {
        fcHold();
        console.log('----------------Player2 turn----------------');
      } else if (randomNumber > 1 && randomNumber <= 6) {
        fcCurrent2();
      }
    }
  }
}
// THE CURRENT ERROR IS THAT THE CURRENT IS ADDING TO SCORE WHEN RANDOMnUMBER IS EQUAL TO 1
