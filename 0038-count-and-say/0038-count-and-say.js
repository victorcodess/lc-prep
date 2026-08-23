/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    const initialResult = countAndSay(n - 1); // 1

    let i = 0;
    let finalResult = [];

    while (i < initialResult.length) {
        let count = 1;
        let num = initialResult[i];

        while (initialResult[i + 1] === initialResult[i]) {
            count++;
            i++
        }

        finalResult.push(count, num);
        i++
    }

    return finalResult.join("")
    
};