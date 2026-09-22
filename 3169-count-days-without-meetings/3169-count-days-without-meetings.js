/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) { // Time: O(nlog(n)), Space: O(1)
   meetings.sort((a, b) => a[0] - b[0]);
   let noMeet = 0;
   let prevE = 1;

   for (let [start, end] of meetings) {
        const diff = Math.max(0, start - prevE);

        noMeet += diff;
        
        prevE = Math.max(prevE, end + 1);
   }

   noMeet += Math.max(0, days - (prevE - 1));

   return noMeet;
};