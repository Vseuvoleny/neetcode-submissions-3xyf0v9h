class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */



    majorityElement(nums) {
        let counter = 0 ;
        const map = {};
        let result = 0;
        while(counter<nums.length){
            const elem = nums[counter];
            if (map[elem] === undefined){
                map[elem] = 1 
            } else {
                   map[elem] = map[elem]+1 
            }
            counter++
        }
        counter = 0
        // console.log({map})
        return Object.entries(map).reduce((acc,[key,value])=>{
                // console.log({value})
            if (value > counter){
                counter=value
                acc=key
            }

            return acc
        },result)
    }
}
