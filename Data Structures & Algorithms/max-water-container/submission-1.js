class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;

        while (left<right){
            const first = heights[left]
            const second = heights[right]
            const height = Math.min(first,second);
            const width = right - left;
            let sq = width * height;

            maxArea = Math.max(sq,maxArea)
            if (first> second){
                right --
            } else {
                left++
            }
        }
        return maxArea
    }
}
