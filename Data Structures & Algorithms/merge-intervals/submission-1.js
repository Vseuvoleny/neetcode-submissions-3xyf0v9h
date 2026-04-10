class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        console.log(intervals)
        const result = [intervals[0]];
        for (const inteval of intervals){
            const start = inteval[0]
            const end = inteval[1];
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
