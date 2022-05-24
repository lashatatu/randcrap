'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore=0;

document.querySelector('.check')
  .addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if ( !guess ) {
      document.querySelector('.message').textContent = 'No Number 😭';
    } else if ( guess === secretNumber ) {
      document.querySelector('.message').textContent = 'Correct Number ✔';
      document.querySelector('body').style.backgroundColor = '#60B347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if(score>highScore){
        highScore=score
        document.querySelector('.highscore').textContent=highScore
      }
    } else if ( guess > secretNumber ) {
      if ( score > 1 ) {
        document.querySelector('.message').textContent = 'Number is too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#BB1515DC';
        document.querySelector('.number').style.width = '30rem';
      }
    } else if ( guess <= secretNumber ) {
      if ( score > 1 ) {
        document.querySelector('.message').textContent = 'Number is too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#BB1515DC';
        document.querySelector('.number').style.width = '30rem';
      }
    }
  });

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});

// text


