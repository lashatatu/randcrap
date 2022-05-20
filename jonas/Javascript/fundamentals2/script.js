'use strict';

const ageCalc = birthYear => 2017 - birthYear;
console.log(ageCalc(1991));

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${retirement}`;
};

console.log(yearsUntilRetirement(1991))

