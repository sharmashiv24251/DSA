// leetcode 1
//Input
// nums = [2,4,11,3]
// target = 6
// Output
// [3,3]
// Expected
// [0,1]
// to solve this issue i added this line nums.indexOf(complement) !== i
var twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (nums.includes(complement) && nums.indexOf(complement) !== i) {
      ans = [i, nums.indexOf(complement)];
    }
  }
  return ans;
};
console.log(twoSum([2, 7, 11, 15], 9));
