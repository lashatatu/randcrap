'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow card'],
]);

const gameTime = 90;


const events = [...new Set(gameEvents.values())];
console.log(events);
console.log('_______________________');

gameEvents.delete(64);
console.log(gameEvents);
console.log('_______________________');

const gameEventKeysArr = Array.from(gameEvents.keys());
console.log(gameEventKeysArr);
let i = 0;
for ( i; i < gameEventKeysArr.length; i++ ) {
}
console.log(`An event happened, on average every ${gameTime / (i)} minutes`);
console.log('_______________________');

for ( const [keys,event] of gameEvents ) {
  console.log(`${keys < 45 ? '[First Half]' : '[Second Half]'} ${keys}: ${event}`);
}

