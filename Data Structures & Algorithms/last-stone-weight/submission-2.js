class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        console.log('length',stones.length)
        if (stones.length < 2){
              console.log('hello',stones[0])
            return stones[0] ?? 0 
        } else {
        stones.sort((a,b)=>a-b);
        console.log(stones)
        const first = stones.at(-1);
        const second = stones.at(-2);
        const result = first - second;
           console.log(stones,result);
           stones = stones.slice(0,-2);
           console.log({stones});
           stones.push(result)
              console.log('after push',{stones});
           stones = stones.filter(Boolean)
             console.log('after filter',{stones});
            return this.lastStoneWeight(stones)
        }
    }
}
