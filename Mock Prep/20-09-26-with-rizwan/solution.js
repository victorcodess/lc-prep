// function minEdits(source, target, i = 0, j = 0, memo = new Map()) {
//     if (i >= source.length) {
//         return target.slice(j).split("").map(ch => `+${ch}`);
//     }

//     if (j >= target.length) {
//         return source.slice(i).split("").map(ch => `-${ch}`);
//     }

//     const key = i + "," + j;
//     if (memo.has(key)) return memo.get(key);

//     if (source[i] === target[j]) {
//         const result = [source[i], ...minEdits(source, target, i + 1, j + 1, memo)];
//         memo.set(key, result);
//         return result;
//     }

//     const remove = [`-${source[i]}`, ...minEdits(source, target, i + 1, j, memo)];
//     const add = [`+${target[j]}`, ...minEdits(source, target, i, j + 1, memo)];


//     const result = remove.length <= add.length ? remove : add;
//     memo.set(key, result);

//     return result;
// }

function minEdits(source, target) {
    const memo = new Map();

    function calcMin(i, j) {
        if (i >= source.length) {
            return target.length - j;
        }
    
        if (j >= target.length) {
            return source.length - i;
        }
    
        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);
    
        if (source[i] === target[j]) {
            const result = calcMin(i + 1, j + 1);
            memo.set(key, result);
            return result;
        }
    
        const remove = 1 + calcMin(i + 1, j);
        const add = 1 + calcMin(i, j + 1);
    
    
        const result = Math.min(remove, add);
        memo.set(key, result);
    
        return result;
    }

    calcMin(0, 0);

    const result = [];

    let i = 0;
    let j = 0;

    while (i < source.length || j < target.length) {
        if (i >= source.length) {
            result.push(`+${target[j]}`);
            j++;
        } else if (j >= target.length) {
            result.push(`-${source[i]}`);
            i++;
        } else if (source[i] === target[j]) {
            result.push(source[i]);
            i++;
            j++;
        } else {
            const remove = calcMin(i + 1, j);
            const add = calcMin(i, j + 1);

            if (remove <= add) {
                result.push(`-${source[i]}`);
                i++;
            } else {
                result.push(`+${target[j]}`);
                j++;
            }
        }
    }

    return result;
}



console.log(minEdits("ABCDEFG", "ABDFFGH"))