'use strict';

const mark = {
  name: 'Mark',
  surName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  name: 'John',
  surName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(`${john.calcBMI() > mark.calcBMI() ? `${john.name}'s BMI (${john.calcBMI()}) is higher than ${mark.name}'s (${mark.calcBMI()})` : `${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${john.name}'s (${john.calcBMI()})`}`);