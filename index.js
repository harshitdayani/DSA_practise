// Entry point for the DSA practise app
console.log('Welcome to the DSA Practise App!');

// Sample runner for Two Sum problem
const twoSumProblem = require('./Leetcode 75/problems/two-sum');
const twoSumSolution = require('./Leetcode 75/solutions/two-sum');

console.log('\n--- Sample Problem ---');
console.log('Title:', twoSumProblem.title);
console.log('Description:', twoSumProblem.description);
console.log('Example Input:', twoSumProblem.example.nums, 'Target:', twoSumProblem.example.target);
console.log('Expected Output:', twoSumProblem.example.output);

const result = twoSumSolution(twoSumProblem.example.nums, twoSumProblem.example.target);
console.log('Solution Output:', result);
