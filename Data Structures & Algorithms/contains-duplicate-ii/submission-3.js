class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Set();
        let l = 0;
        for (let r = 0;r<nums.length;r++){
            const elem = nums[r];
            if (r-l > k){
                map.delete(nums[l])
                l++
            }
            if (map.has(elem)){
                return true
            }
            map.add(elem)
        }
        return false
    }
}
