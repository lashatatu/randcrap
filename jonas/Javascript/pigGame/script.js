'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if ( playing ) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if ( dice !== 1 ) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if ( playing ) {

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if ( scores[activePlayer] >= 100 ) {

      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  diceEl.classList.add('hidden');
  activePlayer = 0;
  playing = true;
  if ( !player0El.classList.contains('player--active') || player0El.classList.contains('player--winner') ) {
    player0El.classList.remove('player--winner');
    player0El.classList.toggle('player--active');
  }
  if ( player1El.classList.contains('player--active') || player0El.classList.contains('player--winner') ) {
    player1El.classList.remove('player--winner');
    player1El.classList.toggle('player--active');
  }
  score0El.textContent = 0;
  score1El.textContent = 0;

  document.querySelector(`#current--${activePlayer}`).textContent = 0;

});

