// 1431. Kids With the Greatest Number of Candies
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid, check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
// Return a boolean array indicating whether each kid can have the greatest number of candies.
// Example:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

module.exports = {
  title: '1431. Kids With the Greatest Number of Candies',
  description: 'Check if each kid can have the greatest number of candies after receiving extraCandies.',
  example: {
    candies: [2,3,5,1,3],
    extraCandies: 3,
    output: [true,true,true,false,true]
  }
};
