//leetcode 283 - move zeroes
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let j = index; j < nums.length; j++) {
    nums[j] = 0;
  }
};
moveZeroes([0, 1, 0, 3, 12]);
