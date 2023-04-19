'use strict';

class CarCl {
  constructor (make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCL extends CarCl {
  constructor (make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
}
