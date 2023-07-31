//kadanes algorithm for this
//leetcode53

var maxSubArray = function (nums) {
  let maxsum = nums[0];
  let currsum = 0;
  for (let i = 0; i < nums.length; i++) {
    currsum += nums[i];
    if (currsum > maxsum) maxsum = currsum;
    if (currsum < 0) currsum = 0;
  }
  return maxsum;
};
[-2, 1, -3, 4, -1, 2, 1, -5, 4];
