const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 95;

function calculateBmi (height, mass) {
  const BMI = mass / (height * height);
  return BMI;
}

const markHigherBIM = calculateBmi(markHeight, markMass) > calculateBmi(johnHeight, johnMass);

if ( markHigherBIM ) {
  console.log(`Mark's BMI ${Math.floor(calculateBmi(markHeight, markMass)*10)/10} is Higher than Johns`);
} else {
  console.log('John is fatter');
}

console.log(calculateBmi(markHeight, markMass));





