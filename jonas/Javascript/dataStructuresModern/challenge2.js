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

for ( const [index, element] of game.scored.entries() ) {
  console.log(`Goal ${index + 1}: ${element}`);
}

let acc = 0;
for ( const [team, number] of Object.entries(game.odds) ) {
  acc = (acc + number);
}
let acc2 = 0;
for ( const [index] of Object.entries(Object.entries(game.odds)) ) {
  acc2 = index - 1 + 2;
}
console.log(acc / acc2);

for ( const [team, number] of Object.entries(game.odds) ) {
  if ( team !== 'x' ) {
    console.log(`Odd of victory ${team === 'team1' ? game[team] : game[team]}: ${number}`);
  }else{
    console.log(`Odd of Draw: ${number}`);
  }
}


