/**
 * Ingestion pipeline: Tracking prices of a stock
 * (price, date)
 * streaming in 
 * for a given amount of ingests 
 * we want to return the minimum price and the date
 * 
 * AAPL
 * (price, date)
 * (4, 2024-05-01)
 * (2, 2024-05-02)
 * (3, 2024-05-03)
 * -------- getMin
 * -----------------------
 * (1, 2024-05-04)
 * -------- getMin
 * [(4, 2024-05-01), (2, 2024-05-02)]
 * getMin -> (2, 2024-05-02)
 * 
 * getMin -> (2, 2024-05-02) - pop | gets the min and deletes from the ingestion pipeline
 * getMin -> (3, 2024-05-03)
 * 
 * vector, array, tuple
 * [not more than 2 values] - tuple
 * 
 * class Pipeline
 * ingest -> (4, 2024-05-01)
 * getMin -> we don't modify the data, just return the min
 */

/*
Input: streaming data with price and data. data is not sorted by price but by date
Output: min price after call

Edges: date would sorted, no negative, one price per day, return most recent day when same price

Approach: 2 functions for storing data, and geting min price data. use hahatable to store data. index by price, and store array of days with price
use stack to min prices 

Time: O(n)
Space: O(n), O(1)

---------
Time O(1) - ingest and getMin
Space O(n)


[4, 3, 2, 5, 1]
- 1
- 5
*/

class Pipeline {
    constructor() {
        this.stockPrices = new Map();
    }

    ingest(stockData) {
        const [price, date] = stockData;
        if (!this.stockPrices.has(price)) this.stockPrices.set(price, []);
        this.stockPrices.get(price).push(String(date));
    }

    getMin() {
        let minPrice = Infinity;
        for (let [price, date] of this.stockPrices) {
            minPrice = Math.min(minPrice, price);
        }

        const currDates = this.stockPrices.get(minPrice);
        return [minPrice, currDates[currDates.length - 1]];
    }
}

let pipe = new Pipeline();
pipe.ingest([4, "2024-05-01"])
pipe.ingest([2, "2024-05-02"])
pipe.ingest([3, "2024-05-03"])
console.log(pipe.getMin())
pipe.ingest([11, "2024-05-044"])
console.log(pipe.getMin())

/**
1. hash tables can work but O(n^2)
2. combining hash table and stack? - tried optimising before getting lock in 
3. what if getMin called without an ingest 
4. why sort date? 
5. would be better to type and try with a dry run instead of hand gestures (video may not always be on)
6. bugs still in code, not assigned (minPrice) (may not always matter but better safe than sorry)

Signal Areas 
1. coding - 4
2. speed - 3 
3. communication - 5
4. DSA - 4
5. testing - 4

Before Coding:
Restated question in own words? Yes
Asked about input constraints/edge cases? Yes
- negative value [static question]; getMin without values in the hash map
- get the earliest day [good question]
Discussed at least 2 approaches 
- Hash tables [good]
- Hash tables and Stack | 2 stacks, no hash tables
State time/space complexity of current approach? Yes
Got "go-ahead" before coding? Yes 

During Coding:
Talked through what they're writing? Yes 
Used meaningful variable names? Yes
Wrote modular/clean code? Yes
Handled edge cases (empty input, single element etc)? Yes 

After Coding:
Walked through code with example? Yes 
Tested edge cases manually? Yes
Identified and fixed bugs? Yes
Discussed potential optimizations? Yes
 */





// new Pipeline()
