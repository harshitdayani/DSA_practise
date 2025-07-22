/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let checkMaxCandy = [];
    let maxCandy = Math.max(...candies);
    for(let i = 0; i < candies.length; i++) {
        if((candies[i] + extraCandies) >= maxCandy) {
            checkMaxCandy[i] = true;
        } else {
            checkMaxCandy[i] = false;
        }
    }
    return checkMaxCandy;
};

// Example usage:
const { example } = require('../problems/kids_with_greatest_number_of_candies');
console.log('Kids With the Greatest Number of Candies');
console.log('Input:', example.candies, 'Extra Candies:', example.extraCandies);
console.log('Output:', kidsWithCandies(example.candies, example.extraCandies));

module.exports = kidsWithCandies;
