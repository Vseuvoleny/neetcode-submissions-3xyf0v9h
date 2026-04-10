class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for (let n of nums){
            if (!(n in map)){
                map[n] = n;
            } else {
                return true
            }
        }
    return false
    }
}
