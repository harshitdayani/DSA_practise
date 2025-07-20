/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
  var mergeAlternately = function(word1, word2) {
    let mergedString = '';
    let max = 0;
    if(word1.length > word2.length) max = word1.length;
    if(word2.length > word1.length) max = word2.length;
     if(word1.length == word2.length) max = word1.length;
    for(let i=0; i<max; i++) {
        mergedString = mergedString + (word1[i] ? word1[i] : '') + (word2[i] ? word2[i] : '');
    }
    return mergedString;
};

// Example usage:
const { example } = require('../problems/merge_strings_alternately');
console.log('Merge Strings Alternately');
console.log('Input:', example.word1, example.word2);
console.log('Output:', mergeAlternately(example.word1, example.word2));

module.exports = mergeAlternately;
