class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          const map = new Map(nums.map((e,i)=>([e,i])));
    for (let i =0;i<nums.length;i++){
        const elem = nums[i]
      const result = target - elem;

        if (map.has(result)){

            const resultIndex = map.get(result)
            if (resultIndex !== i){

            return [resultIndex,i]
            }
        }
    }

    return []
    }
}
