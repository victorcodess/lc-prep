// repo = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
// customerQuery = "mouse";

// const searchSuggestions = (repo, customerQuery) => { // Time: O(nlogn + m * n), Space: O(n)
//     if (!repo.length || customerQuery.length < 2) return [];

//     repo.sort();

//     let j = 1;

//     const suggestions = [];

//     while (j < customerQuery.length) {
//         const term = customerQuery.slice(0, j + 1);
//         let count = 0;
//         const matched = [];

//         for (let word of repo) {
//             if (word.startsWith(term) && count < 3) {
//                 matched.push(word);
//                 count++;
//             }

//             if (count >= 3) break;
//         }

//         suggestions.push(matched);
//         j++;
//     }

//     return suggestions;

// }

// console.log(searchSuggestions(repo, customerQuery))


// function carFleet(target, position, speed) {
//     const fleetTimes = new Set();

//     for (let i = 0; i < position; i++) {
//         const remainingDist = target - position[i];
//         const timeToTarget = remainingDist / speed[i];
//         console.log(2000)
//         fleetTimes.add(timeToTarget);
//     }


//     return fleetTimes.size;
// }

// const target = 10, position = [1,4], speed = [3,2]
// console.log(carFleet(target, position, speed))


// function findSeq(text1, text2, i) {
//     if (i >= text1.length) return 0;

//         let lcs = 0;

//         for (let j = 0; j < text2.length; j++) {
//             if (text2[j] === text1[i]) {
//                 lcs += 1 + longestCommonSubsequence(text1, text2.slice(j + 1), i + 1);
//             }
//         }

//     return lcs;
// }

// console.log(findSeq("cat", "crabt", 0))

function minEatingSpeed(piles, h) { // Time: O(n * m), Space: O(1)
    const maxPile = Math.max(...piles);
    let minK = Infinity;

    for (let i = 1; i <= maxPile; i++) {
        let totalHrs = 0;

        for (let j = 0; j < piles.length; j++) {
            totalHrs += Math.ceil(piles[j] / i)
        }

        if (totalHrs <= h) minK = Math.min(minK, i);
    }

    return minK
}

console.log(minEatingSpeed([312884470], 312884469))