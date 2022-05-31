'use strict';
const button = document.createElement('button');
const textArea = document.createElement('textarea');
document.body.append(textArea);
document.body.append(button);

button.addEventListener('click', function handleClick (e) {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for ( const [i,row] of rows.entries() ) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(output.padEnd(25, ' ').padEnd(26+i, '✅'));
  }

});
/*
 underscore_case
 first_name
 Some_Variable
 calculate_AGE
 delayed_departure
 */

// const underScoreCaseToCamelCase = function (testText) {
//   const testTextLowercase = testText.toLowerCase().trim().split('_');
//
//   const testTextCamel = testTextLowercase[1].slice(0, 1).toUpperCase() + testTextSplit[1].slice(1);
//   const testTextCamelCombine = testTextLowercase[0] + testTextCamel;
//   return e.target.value(testTextCamelCombine);
// };

// console.log(underScoreCaseToCamelCase('underscore_case'));
// console.log(underScoreCaseToCamelCase('first_name'));
// console.log(underScoreCaseToCamelCase('Some_Variable'));
// console.log(underScoreCaseToCamelCase('calculate_AGE'));
// console.log(underScoreCaseToCamelCase('delayed_departure'));


