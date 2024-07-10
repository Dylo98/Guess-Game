'use strict';
let randomNumber = () => Math.trunc(Math.random() * 20) + 1;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;
let secretNumber = randomNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (numberMessage) {
  document.querySelector('.number').textContent = numberMessage;
};

const displayScore = function (scoreMessage) {
  document.querySelector('.score').textContent = scoreMessage;
};

const displayGuess = function (guessMessage) {
  document.querySelector('.guess').value = guessMessage;
};

const displayHighscore = function (highscoreMessage) {
  document.querySelector('.highscore').textContent = highscoreMessage;
};

const changeBackgroundColor = function (backgroundColorValue) {
  document.querySelector('body').style.backgroundColor = backgroundColorValue;
};

const changeWidthBoxNumber = function (widthValue) {
  document.querySelector('.number').style.width = widthValue;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🛑 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    changeBackgroundColor('#60b347');
    changeWidthBoxNumber('30rem');

    if (score > highScore) {
      highScore = score;
      displayHighscore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      changeBackgroundColor('#cc0000');
      changeWidthBoxNumber('30rem');
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  displayGuess('');
  changeWidthBoxNumber('15rem');
  changeBackgroundColor('#222');
});
