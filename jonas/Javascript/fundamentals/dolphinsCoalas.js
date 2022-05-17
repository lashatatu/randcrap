const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const dolphinsScoreSum = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
//rebase
const koalasScore1 = 88;
const koalasScore2 = 105;
const koalasScore3 = 110;
const koalasScoreSum = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if ( dolphinsScoreSum >= 100 && dolphinsScoreSum > koalasScoreSum ) {
  console.log('dolphins won');
} else if (koalasScoreSum >= 100 && koalasScoreSum > dolphinsScoreSum ) {
  console.log('koalas won');
} else if ( koalasScore1 ) {
  console.log('draw');
}
