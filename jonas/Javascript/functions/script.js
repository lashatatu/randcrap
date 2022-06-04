'use strict';

// const bookings = [];
//
// const createBooking = function (flightNum, numPassengers, price) {
//
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//
//   console.log(booking);
//   bookings.push(booking);
// };
//
// createBooking('lh123');

const greet=(greeting)=>{
  return (name)=>{
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey=greet('hey')

greeterHey('lasha')
greeterHey('nana')

greet('hello')('lasha')