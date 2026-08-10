function meetingPlanner(slotsA, slotsB, dur) {
    let currSlotA = 0;
    let currSlotB = 0;
   
   // step 1 ,step 2 
   //\
   
   /*
   
   Approach 2: Brute Force
       - 2 for loops and compare
       O(N^2) time O(1) space
   
   Approach 1: 2 pointer
   Step 1;
   step 2:
       - .sdfsdfa 
   
   O(N) time and O(1) space
   
   */
   
   //  [.   ]
   //.    [.  ]
   
   //   [.   ]
   // [   ]
   
   // [.      ]
   //.   [ ]
   
    const minLength = Math.min(slotsA.length, slotsB.length);
   
    while (currSlotA < minLength && currSlotB < minLength) {
       const [startA, endA] = slotsA[currSlotA];
       const [startB, endB] = slotsB[currSlotB];
       // A = [10, 20] [30, 45]
       // B = [25, 30] [40, 50]
   
       // if we find an overlap, then compare with duration: return slot
       // if we don't find a sufficient overlap: move to next slot
       // if we don't find an overlap at all: move to next slot
       if (startB < endA) {
           if (endB > endA) {
               const overlap = endB - startA;
               if (overlap >= dur) return [startA, startA + dur];
           } else {
               currSlotB++;
           }
       } else {
           currSlotA++;
       }
    }
   
    return [];
   }
   
   const slotsA = [[10, 50], [60, 120], [140, 210]]
   const slotsB = [[0, 15], [60, 70]]
   const dur = 8;
   console.log(meetingPlanner(slotsA, slotsB, dur))

   // Soulution

function meetingPlanner(slotsA, slotsB, dur) {
    let currSlotA = 0;
    let currSlotB = 0;

    while (currSlotA < slotsA.length && currSlotB < slotsB.length) {
        const [startA, endA] = slotsA[currSlotA];
        const [startB, endB] = slotsB[currSlotB];

        const start = Math.max(startA, startB);
        const end = Math.min(endA, endB);

        if (end - start >= dur) return [start, start + dur];

        if (endA < endB) {
        currSlotA++;
        } else {
        currSlotB++;
        }
    }

    return [];
}

const slotsA = [[10, 50], [60, 120], [140, 210]]
const slotsB = [[0, 15], [60, 70]]
const dur = 8;
console.log(meetingPlanner(slotsA, slotsB, dur))