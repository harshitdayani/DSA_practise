// Solution for Two Sum problem
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Example usage:
const { example } = require('../problems/two-sum');
console.log('Sample Problem: Two Sum');
console.log('Input:', example.nums, 'Target:', example.target);
console.log('Output:', twoSum(example.nums, example.target));

module.exports = twoSum;
