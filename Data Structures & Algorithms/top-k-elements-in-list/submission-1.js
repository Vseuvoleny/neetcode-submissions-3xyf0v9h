class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const count = [];
        nums.forEach((num)=>{
            if (num in hash){
                hash[num] = hash[num]+1
            } else {
                hash[num] = 1;
            }
        })
        console.log({hash, a:Object.entries(hash).sort(([key,value],[keyS,valS])=>valS-value)})
        const s = Object.entries(hash).sort(([key,value],[keyS,valS])=>valS-value)

        while(k>0){
            k--
            count.push(s[k][0])
        }
        console.log(count)
        return count

    }
}
