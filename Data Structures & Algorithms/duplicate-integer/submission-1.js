class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let n of nums){
            if (!map.has(n)){
                map.set(n,n);
            } else {
                return true
            }
        }
        return false
    }
}
