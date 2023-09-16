function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const hashtag = "#" + words.join("");
  if (hashtag.length > 140) {
    return false;
  }
  return hashtag;
}

generateHashtag("");
generateHashtag(" ");
generateHashtag("Expected an empty string to return false");
generateHashtag("Still an empty string");
generateHashtag("Do We have A Hashtag");
generateHashtag(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong CatLooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongLooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"
);
/*

 //Backspace String Compare

 const buildString = function (string) {
 const builtArray = [];
 for (let i = 0; i < string.length; i++) {
 if (string[i] !== "#") {
 builtArray.push(string[i]);
 } else {
 builtArray.pop();
 }
 }
 return builtArray;
 };

 let backspaceCompare = function (s, t) {
 const finalS = buildString(s);
 const finalT = buildString(t);
 if (finalS.length === finalT.length) {
 return false;
 } else {
 for (let i = 0; i < finalS.length; i++) {
 if (finalS[i] !== finalT[i]) {
 return false;
 }
 }
 }
 return true;
 };

 backspaceCompare("ab#b", "ad#b");
 backspaceCompare("ab##", "c#d#");
 backspaceCompare("a#c", "b");
 */

/*

 // My Solution
 let backspaceCompare = function (s, t) {
 let sString = "";
 let tString = "";
 for (let i = 0; i < s.length; i++) {
 if (s[i] === "#") {
 sString = s.substring(0, i - 1) + s.substring(i + 1, s.length);
 }
 }
 for (let j = 0; j < s.length; j++) {
 if (t[j] === "#") {
 tString = t.substring(0, j - 1) + t.substring(j + 1, j.length);
 }
 }
 if (tString === sString) {
 console.log(sString,tString, 'true');

 return true;
 }
 if(tString.length===0&&sString.length===0){
 console.log(sString,tString, 'true');
 return true
 }
 if(tString!==sString){
 console.log(sString,tString, 'false');
 return false
 }

 };

 backspaceCompare("ab#b", "ad#b");
 backspaceCompare("ab##", "c#d#");
 backspaceCompare("a#c", "b");

 */

//////////////////////////////////////////////////////////////////

// Trapping Rain Water
/*

 const trap = function (height) {
 let left = 0;
 let right = height.length - 1;
 let leftMax = 0;
 let rightMax = 0;
 let total = 0;

 while (left < right) {
 if (height[left] <= height[right]) {
 if (height[left] >= leftMax) {
 leftMax = height[left];
 } else {
 total += leftMax - height[left];
 }
 left++
 }else {
 if (height[right] >= rightMax) {
 rightMax = height[right];
 } else {
 total += rightMax - height[right];
 }
 right--
 }
 }
 return total
 };

 */
//////////////////////////////////////////////////////////////////
/*
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
 const currentWater = Math.min(maxLeft, maxRight) - height[i];
 if (currentWater >= 0) {
 totalWater += currentWater;
 }
 }
 return totalWater;
 };



 trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
 */

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
