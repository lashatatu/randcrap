'use strict';

class Car {
  constructor (model, speed) {
    this.model = model;
    this.speed = speed;
  }


  accelerate() {
    this.speed += 10
    console.log(`${this.model} going at ${this.speed} km/h`);
  };

  brake() {
    this.speed -= 5
    console.log(`${this.model} going at ${this.speed} km/h`)
  };

  get speedUS () {
    return this.speed / 1.6;
  }

  set speedUS (mov) {
    return this.speed =speed * 1.6;
  }
}


const bmw=new Car('bmw',120)
console.log(bmw.speedUS)

console.log(bmw.accelerate())



