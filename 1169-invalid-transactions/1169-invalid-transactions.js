/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) { // Time: O(n * n), Space: O(n)
    const prevTrans = new Map();
    const invalidTrans = new Set();

    const result = [];

    for (let currIdx = 0; currIdx < transactions.length; currIdx++) {
        const trans = transactions[currIdx];
        const [name, time, amount, city] = trans.split(",");

        if (Number(amount) > 1000) {
            invalidTrans.add(currIdx);
        } 
        
        if (prevTrans.has(name)) {
            for (let pastIdx of prevTrans.get(name)) {
                const pastTrans = transactions[pastIdx];
                const [pName, pTime, pAmount, pCity] = pastTrans.split(",");

                if (within60(Number(pTime), Number(time)) && pCity !== city) {
                    invalidTrans.add(pastIdx);
                    invalidTrans.add(currIdx);
                }
            }
        }

        if (!prevTrans.has(name)) {
            prevTrans.set(name, []);
        }

        prevTrans.get(name).push(currIdx);
    }

    for (let idx of invalidTrans) {
        result.push(transactions[idx]);
    }

    return result;
    
};


function within60(timeA, timeB) {
    return (timeB >= (timeA - 60) && timeB <= (timeA + 60))
}