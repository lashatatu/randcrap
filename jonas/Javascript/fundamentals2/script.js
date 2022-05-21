'use strict';

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
//
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
//
// const checkWinner = (team1, team2) => {
//   if ( team1 >= team2 * 2 ) {
//     console.log(`Dolphins win "(${avgDolphins} vs. ${avgKoalas})"`);
//   } else if ( team1 * 2 <= team2 ) {
//     console.log(`Koalas win "(${avgKoalas} vs ${avgDolphins})"`);
//   } else {
//     console.log('no team wins');
//   }
// };
//
// checkWinner(avgDolphins, avgKoalas);
console.log('asd');

const lasha = {
  friends: ['qeti', 'eka', 'salo'],
  yearOfBirth: 1988,
  name: 'lasha',
  surname: 'talashvili',
  hasDriversLicense: false,
  getSummery: function () {

    return `${this.name} is a ${2022 -
    this.yearOfBirth}-year old programmer, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(lasha.getSummery());

