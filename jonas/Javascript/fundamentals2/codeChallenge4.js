'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//  return bil >= 50 && bil <= 300 ? bil / 100 * 15 : bil / 100 * 20;
const calcTip = (bills) => {
  return bills >= 50 && bills <= 300 ? bills / 100 * 15 : bills / 100 * 20;
};

for ( let i = 0; i < bills.length; i++ ) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
  console.log(`Tip: ${tips[i]}, Total Bill: ${totals[i]}`);
}

console.log(bills, tips, totals);
console.log('-------------------------------------');
const calcAverage = (arr) => {
  let sum = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
  return sum / arr.length;
};

calcAverage(bills);
calcAverage(tips);
calcAverage(totals);




