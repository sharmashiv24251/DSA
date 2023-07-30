var merge = function (nums1, m, nums2, n) {
  let f = m - 1;
  let s = n - 1;
  let i = nums1.length - 1;
  while (s >= 0) {
    if (nums1[f] > nums2[s]) {
      nums1[i] = nums1[f];
      i--;
      f--;
    } else {
      nums1[i] = nums2[s];
      s--;
      i--;
    }
  }
  return nums1;
};

//// special javascript method

var merg2 = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};
console.log(merge([1, 3, 99, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merg2([1, 3, 99, 0, 0, 0], 3, [2, 5, 6], 3));
