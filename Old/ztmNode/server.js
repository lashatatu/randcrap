const express = require('express');

const app = express();

function delay (duration) {
  const startTime = Date.now();
  while ( Date.now() - startTime < duration ) {

  }
}

app.get('/', (req, res) => {
  res.send(`Hello World: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Timer ${process.pid}`);
});

console.log('running server');

console.log('worker has started');
app.listen(3000);
