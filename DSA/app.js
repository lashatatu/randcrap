// Trapping Rain Water

const trap = function (height) {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let leftI = i;
    let rightI = i;
    let maxLeft = 0;
    let maxRight = 0;
    while (leftI >= 0) {
      maxLeft = Math.max(maxLeft, height[leftI]);
      leftI--;
    }
    while (rightI < height.length) {
      maxRight = Math.max(maxRight, height[rightI]);
      rightI++;
    }
    const currentWater = Math.max(maxLeft, maxRight) - height[i];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

const trap = function (height) {
  let totalWater = 0;

  for (let i = 0; i < height.length; i++) {
    let leftI = i;
    let rightI = i;
    let maxLeft = 0;
    let maxRight = 0;
    while (leftI >= 0) {
      maxLeft = Math.max(maxLeft, height[leftI]);
      leftI--;
    }
    while (rightI < height.length) {
      maxRight = Math.max(maxRight, height[rightI]);
      rightI++;
    }
    const currentWater = Math.max(maxLeft, maxRight) - height[i];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

//////////////////////////////////////////////////////////////////

/*

 // Container With Most Water
 let maxArea = function (heights) {
 let i = 0;
 let j = heights.length - 1;
 let maxArea = 0;
 while (i< j) {
 const height = Math.min(heights[i], heights[j]);
 const width=j-i
 const area=height*width;
 maxArea=Math.max(maxArea,area)
 if(heights[i]<=heights[j]){
 i++;
 }else {
 j--
 }
 }
 return maxArea
 };

 maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
 maxArea([1, 1]);
 */

//////////////////////////////////////////////////////////////////

/*

 // Container With Most Water My solution

 let maxArea = function (height) {
 let acc=0
 for (let i = 0; i < height.length; i++) {
 for (let j = i+1; j < height.length; j++) {
 if(height[i]>=height[j]) {
 let accI=height[j]
 const calculate = accI * [j - i];
 if ( acc < calculate ) {
 acc = calculate
 }
 }
 if(height[i]<=height[j]) {
 let accJ=height[i]
 const calculate = accJ * [j - i];
 if ( acc < calculate ) {
 acc = calculate
 }
 }
 }
 }
 return acc;
 };

 maxArea([1,8,6,2,5,4,8,3,7]);
 maxArea([1, 1]);

 */

// TWO SUM
/*
 let twoSum = function (nums, target) {
 for (let i = 0; i < nums.length; i++) {
 for (let j = 0; j < nums.length; j++) {
 const sumOfTwo = nums[i] + nums[j];
 if (sumOfTwo === target && i !== j) {
 console.log(nums[i], nums[j]);
 console.log(i, j);

 return `${nums[i]}${nums[j]}`;
 }
 }
 }
 };

 twoSum([2, 7, 11, 15], 9);
 twoSum([3, 2, 4], 6);
 twoSum([3, 3], 6);
 */
