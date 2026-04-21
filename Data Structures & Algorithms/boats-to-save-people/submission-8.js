class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let boats = 0;
        let l = 0;
        let r = people.length-1;
      people = people.sort((a,b)=>a-b);
        while(l<=r){
            let remain = limit - people[r];
            r--
            boats++;
            if (l <= r && remain >= people[l]) {
                l++;
            }

        }
        return boats
    }
}
