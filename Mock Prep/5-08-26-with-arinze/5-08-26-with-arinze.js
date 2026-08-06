/**
 * list = ['USD', 'JPY', 110] ['USD', 'AUD', 1.45] ['JPY', 'GBP', 0.0070]
 * To/From currency: ['GBP', 'AUD']
 * 1 GBP -> x AUD
 * Output: 1.89
 * 
 * input = [[]] 2D array 
 * to/from= array
 * out => int
 * 
 * {
 * u: [j, a],
 * j: [g, u],
 * a: [u],
 * g: [j],
 * }
 * 
 * usd -> 110jpy
 * jpy -> 1/110usd
 * 
 * gbp -> 1/0.0070jpy (1/110)usd (1.45)aud
 * gbp -> (1/0.0070)*(1/110)*(1.45)aud
 * 
 * usd -> 1.45aud
 * aud -> 1/1.45usd
 * 
 * {
 * uj: 110
 * ju: 1/110
 * ua: 1.45
 * au: 1/1.45
 * jg: 0.0070
 * gj: 1/0.007
 * }
 * 
 * 
 * 
 * [first, last] = tofrom
 * 
 * 
 *          
 */

const resolveConversionRate = (rates, toFrom) => {
    const conversionRates = createRatesDict(rates);
    const currencyGraph = createGraph(rates);
    const [start, end] = toFrom;

    const visited = new Set();
    visited.add(start);

    let stack = [[start, 1]];

    while (stack.length) {
        let [current, runningProduct] = stack.pop();

        if (current === end) return runningProduct;

        for (let neighbor of currencyGraph[current]) {
            if (!visited.has(neighbor)) {
                const currency = current + "," + neighbor;
                visited.add(neighbor);
                stack.push([neighbor, runningProduct * conversionRates.get(currency)]);
            }
        }
    }

    return 0;
}

const createGraph = (rates) => {
    const graph = {};

    for (let [curr1, curr2, rate] of rates) {
        if (!(curr1 in graph)) graph[curr1] = [];
        graph[curr1].push(curr2);

        if (!(curr2 in graph)) graph[curr2] = [];
        graph[curr2].push(curr1);
    }

    return graph;
}

const createRatesDict = (rates) => {
    const conversionRates = new Map();

    for (let [curr1, curr2, rate] of rates) {
        let firstKey = curr1 + "," + curr2;
        let secondKey = curr2 + "," + curr1;

        conversionRates.set(firstKey, rate);
        conversionRates.set(secondKey, (1 / rate));
    }

    return conversionRates;
}

// define funcitons and input
rates = [['USD', 'JPY', 110], ['USD', 'AUD', 1.45], ['JPY', 'GBP', 0.0070]]
toFrom = ['GBP', 'AUD']
console.log(resolveConversionRate(rates, toFrom));

// BFS O(v + e)
// - find shortest path
// - dijkstra (shorted path, BFS)
// DFS O(v * e) - confirm 
// - check all pahts until find path

// Pattern matching 
// Naming 
// relationships - DSA skills (get this one) 
// - speed 
// words relationships - graphs 
// "find all solutions" - backtracking (N-queens)

/**
 * Scores
DSA - 2
    * O(n) -> O(v + e) | spaces 
    * O(n) -> fibonnacci
    * recursion and graphs
    * weighted graphs
    * DFS and BFS

Coding - 4
Speed - 2
Communication - 5
 */