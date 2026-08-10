/**
 * @param {string} s
 * @return {number}
 */
// var minFlipsMonoIncr = function(s, flip = 0) {
//     if (isMonotone(s) === true) return 0;

//     let minFlips = Infinity;

//     const toFlip = isMonotone(s)
//     if (toFlip.length) {
//         const [flipSecond, flipThird] = toFlip;

//         minFlipsMonoIncr(s, flipSecond);
//         minFlipsMonoIncr(s, flipThird);
//     } else {

//     }

    
// };

// const isMonotone = (s) => {
//     let count = 0;
//     let currNum = s[0];
//     let toFlip= [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== currNum) {
//             count++;
//             toFlip.push(i)
//             currNum = s[i];
//         }
//     }

//     return toFlip;
// }

const minFlipsMonoIncr = (s) => {
    let count = 0;
    let result = 0;

    for (let char of s) {
        if (char === "1") {
            count++;
        } else if (char === "0" && count > 0) {
            count--;
            result++;
        }
    }

    return result;
}

// console.log(isMonotone("00110"))