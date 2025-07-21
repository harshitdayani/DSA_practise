/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
};

// Example usage:
const { example } = require('../problems/greatest_common_divisor_of_strings');
console.log('Greatest Common Divisor of Strings');
console.log('Input:', example.str1, example.str2);
console.log('Output:', gcdOfStrings(example.str1, example.str2));

module.exports = gcdOfStrings;
