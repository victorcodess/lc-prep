/**
 * Input: both inputs would be valid, no empty string
 * Output: array of edits
 * 
 * Thought: DP with pointers to find min edits needed;
 * Time: O(n * m)
 * Space: O(n + m)
 * 
 *
 */

/**
	@param source: string
	@param target: string
	@return: string[]
	*/
    function diffBetweenTwoStrings(source, target, i = 0, j = 0, memo = new Map()) {
        if (j >= target.length) return "";
        if (i >= source.length && j < target.length) return "0000000000000000";
        if (source.length - i > target.length - j) return "0000000000000000";
    
        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);
    
        let edits = "";
    
        if (source[i] === target[j]) {
            const ch = source[i];
            const match = ch + "," + diffBetweenTwoStrings(source, target, i + 1, j + 1, memo);
            edits = match;
            
        } else {
            const ch1 = source[i]; 
            const ch2 = target[j]; 
            const remove = `-${ch1}` + "," + diffBetweenTwoStrings(source, target, i + 1, j, memo);
            const add = `+${ch2}` + "," + diffBetweenTwoStrings(source, target, i + 1, j + 1, memo);
    
            console.log(remove, add);
    
            if (remove.length > add.length) {
                edits = add;
            } else {
                edits = remove;
            }
        }   
    
        memo.set(key, edits);
        return edits;
    }
    
    // if j is greater than ....
    // if i is ....
    
    // debug your code below
    // console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"));
    console.log(diffBetweenTwoStrings("AB", "AC"));
    // A,-B,+C
    // A,B,+D,+F,+F,+G,+H, -> wrong
    // A,B,-C,D,-E,F,+F,G,+H, -> correct
    
    
    
    // SOLUTION
    
    // Solution: Dynamic Programming + Construction
    
    // Our solution will be built in two steps: first we'll find the editing distance, and then use it to construct the answer.
    // Finding the Editing Distance
    
    // First, let dp(i, j) = the minimum number of edits required for the problem with strings source[i:] and target[j:]. We will perform what is known as "top-down dynamic programming." What this means is: Since dp(i, j) may depend only on the values of source[i], target[j], dp(i+1, j), dp(i, j+1), and dp(i+1, j+1), we can write a function dp(i, j) that returns the desired answer recursively in terms of these values.
    
    // Additionally, every time we calculate dp(i, j), we will remember the result and record it in memo[i][j]. That ensures that we only perform the effort of calculating dp(i, j) once: afterwards, we simply return the cached result.
    
    // In general, when source[i] == target[j], then dp(i, j) = dp(i+1, j+1), because we simply write source[i]. When source[i] != target[j], then we either edited source[i] (subtraction) and have the problem of transforming source[i+1:] to target[j:] left over (which has answer dp(i+1, j)), or we edited target[j] (addition) and have the problem of transforming source[i:] to target[j+1:] left over (which has answer dp(i, j+1)).
    
    // Let's look at the first part of our solution:
    
    // function diffBetweenTwoStrings(source, target):
    //     # memo[i][j] will be our cached answer to dp(i, j)
    //     memo = new Array(source.length, target.length)
    
    //     # dp(i, j) is the minimum edits to transform
    //     # string source[i:] into string target[j:].
    //     function dp(i, j):
    //         # If one of the strings is empty, we know
    //         # the answer already.
    //         if i == source.length:
    //             return target.length - j
    //         else if j == target.length:
    //             return source.length - i
    
    //         # Otherwise, if we don't have a cached answer,
    //         # then find one.
    //         else if memo[i][j] == null:
    //             if source[i] == target[j]:
    //                 memo[i][j] = dp(i+1, j+1)
    //             else:
    //                 memo[i][j] = 1 + min(dp(i+1, j), dp(i, j+1))
    
    //         return memo[i][j]
    
    // Constructing the Answer
    
    // Now we need to build our answer. We should iterate through the source and target, and in each step decide whether we need to delete or add another letter.
    
    // To figure this out, we need to leverage this information available in dp(i, j). When we have a decision to make between subtracting source[i] or adding target[j], we will use our knowledge of the minimum edit distances dp(i+1, j) and dp(i, j+1) to make our decision.
    
    // function diffBetweenTwoStrings(source, target):
    //     ans = []
    //     i = 0
    //     j = 0
    //     # We are always considering strings source[i:] and target[j:]
    //     while i < source.length AND j < target.length:
    //         if source[i] == target[j]:
    //             # Write the string with no edits
    //             ans.push(source[i])
    //             i += 1
    //             j += 1
    //         else:
    //             # We have to decide whether to subtract source[i],
    //             # or add target[j].
    //             if dp(i+1, j) <= dp(i, j+1):
    //                 ans.push('-' + source[i])
    //                 i += 1
    //             else:
    //                 ans.push('+' + target[j])
    //                 j += 1
    
    //     # Anything left in source must be removed
    //     while i < source.length:
    //         ans.push('-' + source[i])
    //         i += 1
    
    //     # Anything left in target must be added
    //     while j < target.length:
    //         ans.push('+' + target[j])
    //         j += 1
    
    //     return ans
    
    // We could have also used a "bottom-up" dynamic program for calculating the initial edit-distance function, as follows:
    
    // function diffBetweenTwoStrings(source, target):
    //     dp = new Array(source.length + 1, target.length + 1)
    
    //     for i from 0 to source.length:
    //         dp[i][target.length] = source.length - i
    //     for j from 0 to target.length:
    //         dp[source.length][j] = target.length - j
    
    //     for i from source.length - 1 to 0:
    //         for j from target.length - 1 to 0:
    //             if source[i] == target[j]:
    //                 dp[i][j] = dp[i+1][j+1]
    //             else:
    //                 dp[i][j] = 1 + min(dp[i+1][j], dp[i][j+1])
    
    // Instead of caching our results, we compute them in an order that guarantees the components used in computing our answer are correct.
    
    // Here, in the main "for i from source.length - 1 to 0, for j from target.length -1 to 0" loop, we iterated i and j in an order that guaranteed that dp[i+1][j], dp[i][j+1], and dp[i+1][j+1] are correct.
    
    // The rest of the solution proceeds similarly.
    
    // Time Complexity: O(S.length * T.length), from our construction of dp.
    
    // Space Complexity: O(S.length * T.length), the space taken by dp.
    // function diffBetweenTwoStrings(source, target) {
    //     // Create a 2D array dp where dp[i][j] represents the minimum number of operations
    //     // required to transform source[i:] into target[j:]
    //     let dp = Array(source.length + 1).fill().map(() => Array(target.length + 1).fill(0));
    
    //     // Fill the dp table
    //     for (let i = source.length; i >= 0; i--) {
    //         for (let j = target.length; j >= 0; j--) {
    //             if (i === source.length) {
    //                 dp[i][j] = target.length - j;
    //             } else if (j === target.length) {
    //                 dp[i][j] = source.length - i;
    //             } else if (source[i] === target[j]) {
    //                 dp[i][j] = dp[i + 1][j + 1];
    //             } else {
    //                 dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1]);
    //             }
    //         }
    //     }
    
    //     // Use the dp table to construct the answer
    //     let ans = [];
    //     let i = 0, j = 0;
    //     while (i < source.length && j < target.length) {
    //         if (source[i] === target[j]) {
    //             ans.push(source[i]);
    //             i += 1;
    //             j += 1;
    //         } else {
    //             if (dp[i + 1][j] <= dp[i][j + 1]) {
    //                 ans.push('-' + source[i]);
    //                 i += 1;
    //             } else {
    //                 ans.push('+' + target[j]);
    //                 j += 1;
    //             }
    //         }
    //     }
    
    //     while (i < source.length) {
    //         ans.push('-' + source[i]);
    //         i += 1;
    //     }
    
    //     while (j < target.length) {
    //         ans.push('+' + target[j]);
    //         j += 1;
    //     }
    
    //     return ans;
    // }
    
    // // Debug your code below
    // console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"));
    
    // HINTS
    
    
    // If X and Y have the same starting letter, we can write it and then write our solution to the problem involving strings X[1:] and Y[1:]. For example,
    
    // function solve(X, Y):
    //     if X[0] == Y[0]:
    //         return X[0] + " " + solve(X[1:], Y[1:])
    //     else:
    //         #TODO
    
    // What are our options if X and Y have a different letter?
    
    //     Say X starts with 'A' and Y starts with 'B'. Then either we subtracted A ('-A'), and write our solution to the problem for (X[1:], Y) or we added B ('+B') and then wrote our solution to the problem for (X, Y[1:]).
    
    // For example,
    
    // function solve(X, Y):
    //     if X[0] == Y[0]:
    //         return X[0] + " " + solve(X[1:], Y[1:])
    //     else:
    //         ans1 = solve(X[1:], Y)
    //         ans2 = solve(X, Y[1:])
    //         if ans1.token_length <= ans2.token_length:
    //             return "-" + X[0] + " " + ans1
    //         else:
    //             return "+" + Y[0] + " " + ans2
    
    //     Say we knew the minimum number of edits required for the problem with strings X[i:], Y[j:]. How might we use that to find the actual edits themselves?
    
    //     How might we avoid repeating work, such as calculating the answer to the problem for inputs (X[3:], Y[3:]) multiple times?
    
    //     This problem is easiest to attempt in two parts: First, try to find how long the final answer for the strings source[i:] and target[j:] must be, using dynamic programming. Second, try to reconstruct the answer using the following logic: use two pointers to do the second part, If source[i] == target[j] we write source[i] in the answer. If j is invalid or dp(i+1, j) <= dp(i, j+1) we write -source[i] in the answer. Otherwise, we write +target[j].
    