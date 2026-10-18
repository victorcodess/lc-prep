/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let start = 0;
//   let maxLength = 0;
//   let substringMap = new Map();

//   for (let end = 0; end < s.length; end++) {
//     substringMap.set(s[end], (substringMap.get(s[end]) || 0) + 1);

//     while (substringMap.get(s[end]) > 1) {  
//       substringMap.set(s[start], substringMap.get(s[start]) - 1);
//       start++;
//     }

//     maxLength = Math.max(maxLength, (end - start) + 1);
//   }

//   return maxLength;
// };

var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let maxLength = 0;
  const windowSet = new Set();
  for (let end = 0; end < s.length; end++) {
    while (windowSet.has(s[end])) {
      windowSet.delete(s[start]);
      start++;
    }
    windowSet.add(s[end]);
    maxLength = Math.max(maxLength, (end - start) + 1);
  }
  return maxLength;
};