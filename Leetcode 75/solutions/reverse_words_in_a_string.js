/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

// Example usage:
const { example } = require('../problems/reverse_words_in_a_string');
console.log('Reverse Words in a String');
console.log('Input:', example.s);
console.log('Output:', reverseWords(example.s));

module.exports = reverseWords;
