'use strict';

const bills = [125, 555, 44];

const calcTip = (bil) => {
  return bil >= 50 && bil <= 300 ? bil / 100 * 15 : bil / 100 * 20;
};

console.log(calcTip(100));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(total);