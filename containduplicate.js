////remeber js me array sort alphabetical order hota h
//array.sort(function(a, b){return a - b})

var containsDuplicate = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([2, 14, 18, 22, 22]));
