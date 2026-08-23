// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function directTheArrows(S) {
    const arrows = "^v<>";
    const arrowsNum = { 
        "^^": 0,
        "^v": 2,
        "^<": 1,
        "^>": 3,

        "vv": 0,
        "v<": 3,
        "v>": 1,
        "v^": 2,
        
        "<<": 0,
        "<^": 3,
        "<>": 2,
        "<v": 1,

        ">>": 0,
        ">^": 1,
        "><": 2,
        ">v": 3,
    };

    let minMoves = Infinity;

    for (let type of arrows) {
        let moves = 0;
        
        for (let arr of S) {
         moves += arrowsNum[arr + type];
        }

        minMoves = Math.min(minMoves, moves)
    }

    return minMoves
}

/*

^ to <
< to v
v to >
> to ^

*/

console.log(directTheArrows("^^"))
