class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
 
        for (let elem of asteroids){
            while (stack.length > 0 && elem < 0 && stack.at(-1) > 0){
                const diff = elem + stack.at(-1);
                if (diff < 0){
                    stack.pop()
                } else if (diff>0){
                    elem = 0
                } else {
                       elem = 0
                       stack.pop()
                }
            }
            if (elem)
            stack.push(elem)
        }
        return stack
    }
}
