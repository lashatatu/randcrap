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
