class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0;
        const set = new Set();
        for (let r = 0;r<nums.length;r++){
            const elem = nums[r]
            if (r - l > k){
                set.delete(nums[l])
                l++
            }
            if (set.has(elem)){


                    return true

            } else {
                set.add(elem)
            }
        }
        return false
    }
}
