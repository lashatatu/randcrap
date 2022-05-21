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

console.log('-------------------------------------');
const calcAverage = (bills) => {
  let sum = 0;

  for ( let i = 0; i < bills.length; i++ ) {
    sum = sum + bills[i];
  }
  console.log(sum / bills.length);

};
calcAverage(bills);
calcAverage(totals);




