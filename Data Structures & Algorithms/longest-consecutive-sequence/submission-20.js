class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;
        const set = new Set(nums)
        for (let s of set){
             let subresult = 0;
             while (set.has(s)){
                s=s+1;
                subresult++
             }
             result = Math.max(result,subresult)
        }
        return result
    }
}