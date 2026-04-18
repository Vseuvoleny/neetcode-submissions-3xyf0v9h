class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
 
        for (let i = 0;i<asteroids.length;i++){
            let elem = asteroids[i]
            while (stack.length > 0 && elem < 0 && stack.at(-1) > 0){
                console.log(elem,stack.at(-1))
                const diff = elem + stack.at(-1);
                if (diff < 0){
                    stack.pop()
                } else if (diff>0){
                    elem = 0
                } else {
                         console.log('he')
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
