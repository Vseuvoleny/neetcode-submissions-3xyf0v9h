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
            // console.log({l,r})
            // console.log({lev:people[l],rev:people[r]})
            // console.log(people[l] + people[r])
        
            let remain = limit - people[r--];
            boats++;
            if (l <= r && remain >= people[l]) {
                l++;
            }

        }
        // if (r === people.length-1){
        //     boats++
        // }
            // console.log({l,r})
        return boats
    }
}
