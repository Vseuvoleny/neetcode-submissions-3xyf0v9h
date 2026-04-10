class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const count = [];
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        nums.forEach((num)=>{
            hash[num] = (hash[num] || 0)+1
        })

        for (const n in hash) {
            freq[hash[n]].push(parseInt(n));
        }

            for (let i = freq.length -1; i>0;i--){
                for (const n of freq[i]){
                    count.push(n)
                    if (count.length === k){
                        return count
                    }
                }
            }

        // const s = Object.entries(hash).sort(([_key,value],[_keyS,valS])=>valS-value)

        // while(k>0){
        //     k--
        //     count.push(s[k][0])
        // }


        // return count

    }
}
