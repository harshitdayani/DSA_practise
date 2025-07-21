// 1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

module.exports = {
  title: '1071. Greatest Common Divisor of Strings',
  description: 'Return the largest string that divides both str1 and str2.',
  example: {
    str1: 'ABCABC',
    str2: 'ABC',
    output: 'ABC'
  }
};
