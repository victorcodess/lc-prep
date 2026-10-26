/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
// var canChange = function(start, target) { // Time: O(n + m), Space: O(1)
//     let ls = 0, rs = 0, lt = 0, rt = 0;

//     for (let i = 0; i < start.length; i++) {
//         const chS = start[i];
//         const chT = target[i];

//         if (chS === "L") ls++;
//         if (chS === "R") rs++;
//         if (chT === "L") lt++;
//         if (chT === "R") rt++;
//     }

//     if (ls !== lt || rs !== rt) return false;

//     let s = 0;
//     let t = 0;

//     while (s < start.length && t < target.length) {
//         while (s + 1 < start.length && start[s] === "_") s++;
//         while (t + 1 < target.length && target[t] === "_") t++;

//         if (start[s] !== target[t]) return false;

//         if (start[s] === "L") {
//             if (s < t) return false;
//         } else {
//             if (s > t) return false;
//         }

//         s++;
//         t++;
//     }

//     return true;
// };

var canChange = function(start, target) { // Time: O(n + m), Space: O(1)
    let n = start.length;

    let s = 0;
    let t = 0;

    while (s < n || t < n) {
        while (s < n && start[s] === "_") s++;
        while (t < n && target[t] === "_") t++;

        if (s === n || t === n) return s === t;

        if (start[s] !== target[t]) return false;

        if (start[s] === "L") {
            if (s < t) return false;
        } else {
            if (s > t) return false;
        }

        s++;
        t++;
    }

    return true;
};