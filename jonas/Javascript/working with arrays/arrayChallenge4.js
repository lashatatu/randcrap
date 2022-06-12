'use strict';

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];

dogs.forEach((food) => {
  food.recomendedFood = Math.trunc(food.weight ** 0.75 * 28);
});

console.log(dogs);

const sarahDog = dogs.find((owner) => {
  return owner.owners.includes('Sarah');
});

console.log(`Sarah's dog is eating too ${sarahDog.curFood > sarahDog.recomendedFood ? 'much' : 'little'}`);

const ownersEatTooMuch = dogs.filter(food => {
  return food.curFood > food.recomendedFood;
})
  .flatMap(own => own.owners);
const ownersEatTooLittle = dogs.filter(food => {
  return food.curFood < food.recomendedFood;
})
  .flatMap(own => own.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little}`);
const checkEatingOkay = (rec) => rec.curFood > rec.recomendedFood * 0.9 && rec.curFood < rec.recomendedFood* 1.1;
console.log(dogs.some((rec) => rec.curFood === rec.recomendedFood));
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

const dogsCopy=dogs.slice().sort((a,b)=>a.recomendedFood-b.recomendedFood)
console.log(dogsCopy);