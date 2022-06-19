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

// const greet=(greeting)=>{
//   return (name)=>{
//     console.log(`${greeting} ${name}`);
//   }
// }
//
// const greeterHey=greet('hey')
//
// greeterHey('lasha')
// greeterHey('nana')
//
// greet('hello')('lasha')

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book (flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode} ${flightNum} ,name`});
  },
};

lufthansa.book(239, 'lasha tatulashvili');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23,'lt')
book.call(eurowings, 23, 'la');

const bookEW = book.bind(eurowings);
bookEW(23, 'steven');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTaxRate = (rate) => (value) => {
  return value + value * rate;
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));