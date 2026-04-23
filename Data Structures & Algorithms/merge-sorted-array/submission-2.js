class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l = 0;
        // let r = 0;
        for (let i=m;i<nums1.length;i++ ){
            const e =nums1[i];
            if (e === 0){
                nums1[i] = nums2[l]
                l++
            }
        }
        nums1.sort((a,b)=>a-b)
        // console.log(nums1)
        
    }
}


[1,2,20,40,10,20]