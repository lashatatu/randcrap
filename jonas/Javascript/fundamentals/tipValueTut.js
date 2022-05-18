const bil = 430;
const tip = bil > 50 && bil < 300 ? bil / 100 * 15 : bil / 100 * 20;

console.log(tip);