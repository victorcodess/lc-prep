/**
 * Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board. 
In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered 
adjacent to each other. 
This process should be repeated as many time as possible. 
You should greedily remove characters from left to right.

Example: aaabbbbc, baaabbc -> bbbc
Output: c

baaa -> bbbb -> ""
baaabbbc -> bbbbc -> c
 */

/* 
Input: string

Edge cases: could be less than 3 letters(same string), could have empty string("")

Output: string, reduced strings

Approach: look for frist >= 3 sequence with 2 pointers
            remove that sequence 
            reset poiters to start of string
            use recursion to process next string;


Time: O(n) Space: O(n + m)

O(n) for each stack in the call stack 
abbbaa
  O(n)  -> aaa O(n) creating a new string | string are immutable 
            -> "" O(no work done)
    -> Time
*/

// https://algomaster.io/learn/behavioral/star-explained

const crushCandies = (candies) => {
    if (candies.length === 0) return "";

    let i = 0;
    let j = 0;

    let nextCandies = candies;

    /*
        aaabbbbc
        i j
        abcd
        baaabbc
        bbbc
        bbac
        i j
    */

    while (j < candies.length) {
        while ((j + 1) < candies.length && candies[j + 1] === candies[j]) {
            j++;
        }

        if (j - i + 1 >= 3) {
            nextCandies = [candies.slice(0, i), ...candies.slice(j + 1)]; // bbbbc // c
            nextCandies = crushCandies(nextCandies.join("")); // c // c  
        }

        i = j + 1; 
        j = i;
    }

    return nextCandies;
}

// console.log(crushCandies("baaabbc"));
let str = ['a','a']
str.join(",") //a,a
console.log(str.join("")) 

/**
 * Space complexity -> slice was a huge factor
 * O(time taken + auxiliary work done)
 *  - traversing the recursion | O(n)
 *  - for each frame | O(n) -> O(n^2)
 *  - backtracking [N-queens] N * N
 * why code didn't run -> 
 *  stick with one data type
 *  start out with string -> convert array -> string
 */
