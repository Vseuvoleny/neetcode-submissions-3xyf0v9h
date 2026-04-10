class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        if (stones.length < 2){
            return stones[0] ?? 0 
        } else {
        stones.sort((a,b)=>a-b);
        const first = stones.at(-1);
        const second = stones.at(-2);
        const result = first - second;
        stones = stones.slice(0,-2);
        stones.push(result)
        stones = stones.filter(Boolean)
        return this.lastStoneWeight(stones)
        }
    }
}
