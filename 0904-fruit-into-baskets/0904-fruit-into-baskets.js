/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) { // Time: O(n), Space: O(1)
    let maxTrees = 0;
    const baskets = new Map();
    let j = 0;

    for (let i = 0; i < fruits.length; i++) {
        const right = fruits[i];

        baskets.set(right, (baskets.get(right) || 0) + 1);

        while (baskets.size > 2) {
            const left = fruits[j];

            baskets.set(left, baskets.get(left) - 1);

            if (baskets.get(left) === 0) {
                baskets.delete(left);
            } 
            
            j++; 
        }

        const trees = i - j + 1;

        maxTrees = Math.max(maxTrees, trees);
    }

    return maxTrees;
    
};