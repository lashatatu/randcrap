const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 95;

function calculateBmi (height, mass) {
  const BMI = mass / (height * height);
  return BMI;
}

const markBMI = calculateBmi(markHeight, markMass);
const johnBMI = calculateBmi(johnHeight, johnMass);
const markHigherBIM = markBMI > johnBMI;

if ( markHigherBIM ) {
  console.log(`Mark's BMI ${Math.floor(markBMI * 10) / 10} is Higher than John's`);
} else {
  console.log('John is fatter');
}

console.log(calculateBmi(markHeight, markMass));





