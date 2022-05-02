let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if ( isNaN(guess) || guess < min || guess > max ) {
    setMessage(`please enter numbers ${min} and ${max}`, 'red');
  }

  if ( guess === winningNum ) {

    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if ( guessesLeft === 0 ) {

      gameOver(false, `Game Over, you lost, The correct number was ${winningNum}`, 'red');

    } else {

      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

function gameOver (won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = 'green';
  message.style.color = color;
  setMessage(msg);
}

function setMessage (msg, color) {
  message.style.color = color;
  message.textContent = msg;
}