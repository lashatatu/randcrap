const btn = document.querySelector('#btn');
const name = document.querySelector('.name');
const textInput = document.querySelector('#textInput');

textInput.addEventListener('keydown',runEvent);

function runEvent (e) {
  if ( e.keyCode === 13 ) {
    name.innerHTML = textInput.value;
    textInput.value = '';
  }

  if ( e.keyCode === 27 ) {
    textInput.value = '';
  }

  name.innerText = e.target.value;
};

console.log(btn);
btn.addEventListener('click', () => {
  // switch body style
  btn.style.backgroundColor = btn.style.backgroundColor === 'white' ? '#CCCCCC' : 'white';
  btn.style.textDecoration = btn.style.textDecoration === 'none' ? 'underline' : 'none';

});