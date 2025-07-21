// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchData(target, initial, last, nums) {
  const mid = Math.floor((initial + last) / 2);
  if (
    target === nums[mid] ||
    (target > nums[mid - 1] && target < nums[mid] && mid != 0)
  ) {
    return mid;
  } else if (target > nums[mid]) {
    if (mid === last) {
      return mid + 1;
    }
    return searchData(target, mid + 1, last, nums);
  } else {
    if (mid === 0) {
      return -1;
    }
    return searchData(target, initial, mid - 1, nums);
  }
}

var searchInsert = function (nums, target) {
  return searchData(target, 0, nums.length - 1, nums);
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
