const bil = 40;
const tip = bil >= 50 && bil <= 300 ? bil / 100 * 15 : bil / 100 * 20;
const finalBil=tip+bil

console.log(finalBil);