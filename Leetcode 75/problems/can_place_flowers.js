// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

module.exports = {
  title: '605. Can Place Flowers',
  description: 'Return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.',
  example: {
    flowerbed: [1,0,0,0,1],
    n: 1,
    output: true
  }
};
