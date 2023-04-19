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
//
// class PersonCl {
//   constructor (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//
//   calcAge () {
//     console.log(2037 - this.birthYear);
//   }
//
//   get age () {
//     return 2037 - this.birthYear;
//   }
// }

//
// const lasha = new PersonCl('lasha', 1988);
// console.log(lasha.age);
//
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],
//
//   get latest () {
//     return this.movements.slice(-1)
//       .pop();
//   },
//
//   set latest (mov) {
//     this.movements.push(mov);
//   },
// };
//
// console.log(account.latest);

// const PersonProto = {
//   calcAge () {
//     console.log(2037 - this.birthYear);
//   },
//   init (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//
// const steven = Object.create(PersonProto);
//
// console.log(steven);
//
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();
//
// console.log(steven.__proto__);
//
// const sarah = Object.create(PersonProto);
//
// sarah.init('sarah',1979)
//
// console.log(sarah);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
//
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// Student.prototype=Object.create(Person.prototype)
//
// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstName} and i study ${this.course}`);
// };
//
// const mike = new Student('mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge()
/*

 class PersonCl {
 constructor (fullName, birthYear) {
 this.fullName = fullName;
 this.birthYear = birthYear;
 }

 calcAge () {
 console.log(2037 - this.birthYear);
 }

 greet () {
 console.log(`Hey ${this.fullName}`);
 }

 get age () {
 return 2037 - this.birthYear;
 }

 set fullName (name) {
 if ( name.includes(' ') ) {
 this._fullName = name;
 } else {
 alert(`${name} is not a full name!`);
 }
 }

 get fullName () {
 return this._fullName;
 }

 static hey () {
 console.log(`Hey there`);
 }


 }

 class Student extends PersonCl {
 constructor (fullName, birthYear, course) {
 super(fullName, birthYear);
 this.course = course;
 }

 introduce(){
 console.log(`my name is ${this.fullName} and i study ${this.course}`);
 }

 calcAge(){
 console.log(`i'm ${2037-this.birthYear} years old, but as a student i feel more like ${2037-this.birthYear+10}`);
 }
 }

 const martha=new Student('lasha tatu',2012,'Computer science')

 martha.introduce()

 */

// inheritance between classes
/*

 const PersonProto = {
 calcAge () {
 console.log(2037 - this.birthYear);
 },
 init (firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
 },

 };

 const steven = Object.create(PersonProto);

 const StudentProto = Object.create(PersonProto);

 StudentProto.init=function (firstName,birthYear,course){
 PersonProto.init.call(this,firstName, birthYear)
 this.course=course
 }
 const jay=Object.create(StudentProto)

 jay.init('jay',2010,'computer science')

 */

// another class example
/*

class Account {
  // public fields
  locale = navigator.language;

  // private fields
  #movements=[]
  #pin


  constructor (owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`thanks for opening an account, ${owner}`);
  }

  getMovements () {
    return this.#movements;
  }

  deposit (val) {
    this.#movements.push(val);
  }

  withdraw (val) {
    this.deposit(-val);
  }

  _approveLoan (val) {
    return true;
  }

  requestLoan (val) {
    if ( this._approveLoan(val) ) {
      this.deposit(val);
      console.log(`loan approved`);
    }
  }


}

const acc1 = new Account('jonas', 'eur', 111);

acc1.withdraw(100);
acc1.requestLoan(1000);

console.log(acc1);
*/

// chaining methods


