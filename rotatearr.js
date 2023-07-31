//leetcode 189 - rotate array k times

//apparantly this is tooo slow for leetcode 🥲
var rotateold = function (nums, k) {
  for (let i = 1; i <= k; i++) {
    nums.unshift(nums[nums.length - 1]);
    nums.splice(nums.length - 1, 1);
  }
};
console.log(rotateold([1, 2, 3, 4, 5, 6, 7], 3));

///leetcode worthy soln

function reverse(arr, start, end) {
  let temp = 0;
  for (let i = 0; i < Math.ceil((end - start) / 2); i++) {
    temp = arr[end - i];
    arr[end - i] = arr[start + i];
    arr[start + i] = temp;
  }
}
var rotate = function (nums, k) {
  k = k % nums.length; //chatgpt made me add this
  // For example, let's say we have an array nums = [1, 2, 3, 4, 5],
  // and we want to rotate it by k = 7 steps.
  // Since the length of nums is 5,
  // rotating it by 7 steps is equivalent to rotating it by 7 % 5 = 2 steps.
  // So, the final rotated array would be [4, 5, 1, 2, 3].
  reverse(nums, 0, nums.length - 1); //[7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); //[5,6,7,4,3,2,1]
  reverse(nums, k, nums.length - 1); //[5,6,7,1,2,3,4,5]
  console.log(nums);
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

//this makes soo much sense noww
var rotate69 = function (nums, k) {
  //[1,2,3,4,5] , k = 7 ie same as k = 2 for lenght 5
  k = k % nums.length; // here k becomes 2
  const newHead = nums.splice(nums.length - k, nums.length); // [1,2,3] , [4,5] deleted
  nums.unshift(...newHead); //[4,5,1,2,3]
  //   console.log(nums);
};

console.log(rotate69([1, 2, 3, 4, 5, 6, 7], 3));
