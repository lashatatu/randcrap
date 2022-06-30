'use strict';
//
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//
//   console.log(firstName);
//   console.log(birthYear);
// };
//
// const jonas = new Person('Jonas', 1990);
// const lasha = new Person('Lasha', 1988);
//
// console.log(jonas);
// console.log(lasha);
//
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// jonas.calcAge();
//
// console.log(jonas.__proto__.__proto__);
//
// const arr = [3, 6, 4, 5, 6, 9, 3];
//
// console.log(arr.__proto__);
//
// arr.sort((a, b) => {
//   return a - b;
// });
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
//
// const ss = new Set(arr);
//
// console.log(ss);

class PersonCl {
  constructor (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge () {
    console.log(2037 - this.birthYear);
  }
}

const lasha = new PersonCl('lasha', 1988);
console.log(lasha);


