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
  console.log('Mark is fatter');
} else {
  console.log('John is fatter');
}





