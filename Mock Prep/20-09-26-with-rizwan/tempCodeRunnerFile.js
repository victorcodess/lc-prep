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
            if (calcMin(i + 1, j) <= calcMin(i, j + 1)) {
                result.push(`-${source[i]}`);
            } else {
                result.push(`+${target[j]}`);
            }
        }
    }