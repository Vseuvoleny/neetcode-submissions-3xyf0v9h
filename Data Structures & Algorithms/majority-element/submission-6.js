class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */



    majorityElement(nums) {
        let counter = 0 ;
        const map = {};
        let result = 0;
        let max = 0;
        while(counter<nums.length){
            const elem = nums[counter];
            map[elem] = (map[elem] || 0)+1
            if (map[elem] > max){
                result = elem
                max = map[elem]
            }
     
            counter++
        }

        return result
    }
}
