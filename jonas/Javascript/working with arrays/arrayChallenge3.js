'use strict'

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {

  const dogAgeInHumanYears = ages.map((age) => {
    return age <= 2 ? 2 * age : 16 + 4 * age;
  }).filter((filteredAge) => {
      return filteredAge > 18;
    }).reduce((acc, averageAges,i, arr) => {
    return acc + averageAges/arr.length;
  }, 0);
  return dogAgeInHumanYears;
};

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));