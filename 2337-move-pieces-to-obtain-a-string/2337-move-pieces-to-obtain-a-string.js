/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) { // Time: O(n + m), Space: O(1)
    let ls = rs = lt = rt = 0;

    for (let i = 0; i < start.length; i++) {
        const chS = start[i];
        const chT = target[i];

        if (chS === "L") ls++;
        if (chS === "R") rs++;
        if (chT === "L") lt++;
        if (chT === "R") rt++;
    }

    if (ls !== lt || rs !== rt) return false;

    let s = 0;
    let t = 0;

    while (s < start.length && t < target.length) {
        while (start[s] === "_") s++;
        while (target[t] === "_") t++;

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