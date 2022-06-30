'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const CarEv = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

CarEv.prototype = Object.create(Car.prototype);

CarEv.prototype.chargeBattery = function (chargeTo) {
  this.chargeTo = chargeTo;
};

CarEv.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with charge of ${this.charge}`);
};

const tesla = new CarEv('Tesla', 120, 23);

tesla.accelerate();