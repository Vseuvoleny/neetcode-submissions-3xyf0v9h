class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        const result = [intervals[0]];
        for (const [start,end] of intervals){
            const lastEnd = result.at(-1)[1];
            if (start <= lastEnd){
                result.at(-1)[1]=Math.max(lastEnd,end)
            } else {
                result.push([start,end])
            }
        }
        return result
    }
}
