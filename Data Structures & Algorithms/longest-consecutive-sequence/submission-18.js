class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
            let result = 0;
            const set = new Set(nums);
            for (let elem of nums){
                let streak = 0;
                let curr = elem
                while (set.has(curr)){
                    streak++
                    curr++
                }
                result= Math.max(result,streak)
            }
                return result
            }
        }