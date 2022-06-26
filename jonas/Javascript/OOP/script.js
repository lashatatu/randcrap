'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  console.log(firstName);
  console.log(birthYear);
};

const jonas = new Person('Jonas', 1990);
const lasha = new Person('Lasha', 1988);

console.log(jonas);
console.log(lasha.age);



