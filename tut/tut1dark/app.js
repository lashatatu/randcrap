'use strict';

const click = document.querySelector('.click');
const body = document.querySelector('body');

click.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// Language: javascript
