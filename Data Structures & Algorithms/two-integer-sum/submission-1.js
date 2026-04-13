class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i =0;i<nums.length;i++){
            const elem = nums[i]
            const result = target - elem;
            if (map.has(result)){
                return [map.get(result),i]
            } 
            map.set(elem,i)
        }
        return []
    }
}
