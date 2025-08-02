/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const strArr = s.split('');
    let left = 0, right = s.length - 1;
    while(left < right) {
        while(left < right && !vowels.has(strArr[left])) left++;
        while(left < right && !vowels.has(strArr[right])) right--;
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
    return strArr.join('');
};

// Example usage:
const { example } = require('../problems/reverse_vowels_of_a_string');
console.log('Reverse Vowels of a String');
console.log('Input:', example.s);
console.log('Output:', reverseVowels(example.s));

module.exports = reverseVowels;
