'use strict';

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {

  const dogAgeInHumanYears = ages.map((age) => {
    return age <= 2 ? 2 * age : 16 + 4 * age;
  });
  console.log(dogAgeInHumanYears);

  const dogAdultAges = dogAgeInHumanYears
    .filter((filteredAge) => {
      return filteredAge > 18;
    });
  console.log(dogAdultAges);

  const dogAgeAverage = dogAdultAges.reduce((acc, averageAges) => {
    return acc + averageAges;
  }, 0) / dogAdultAges.length;

  return dogAgeAverage;

};

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
