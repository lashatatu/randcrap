'use strict';

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;

};

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.brand} going at ${this.speed} km/h`)
};

const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
Mercedes.brake()
