// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// first solution came to my mind was nested loops ... didnt attempt it ik its slow O(n^2)
// used a set in second solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate1 = function (nums) {
  if (new Set(nums).size === nums.length) {
    return false;
  } else return true;
};

// further shortened this code 
var containsDuplicate = function (nums) {
  return !(new Set(nums).size === nums.length);
};

// some people have used hash maps but set is also basically the same so yeah thats it ! thats the end 👋🏻
