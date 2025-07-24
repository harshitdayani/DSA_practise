/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;  // Plant a flower
            count++;
            if (count >= n) return true;
        }
    }
    return count >= n;
}

// Example usage:
const { example } = require('../problems/can_place_flowers');
console.log('Can Place Flowers');
console.log('Input:', example.flowerbed, 'n:', example.n);
console.log('Output:', canPlaceFlowers([...example.flowerbed], example.n));

module.exports = canPlaceFlowers;
