'use strict';

const testData1J = [3, 5, 2, 13, 7];
const testData1K = [4, 1, 15, 8, 3];
const testData2J = [9, 16, 6, 8, 3];
const testData2K = [10, 5, 6, 1, 4];

const updatedTestData = (arr) => arr.slice(1).slice(0, -2);

const checkLogs = (arr1, arr2) => {
  const arrays = [...arr1, ...arr2];
  arrays.forEach((dog, i) => {
    console.log(dog > 3 ? `Dog number ${i + 1} is an adult, and is ${dog} years old` : `Dog number ${i +
    1} is still a puppy 🐶`);
  });
};

checkLogs(updatedTestData(testData1J), testData1K);
console.log('----------------');
checkLogs(updatedTestData(testData2J), testData2K);

