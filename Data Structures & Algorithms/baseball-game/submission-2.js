class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let result = 0
        for (let op of operations){
            switch (op){
                case '+':
                const prev = stack.pop();
                const res = Number(stack.at(-1))+ Number(prev);
                stack.push(prev)
                stack.push(res)
                result += res 
                break
                case 'C':
                result -= stack.pop();
                break
                case "D":
                const ress = Number(stack.at(-1)) * 2;

                stack.push(ress)
                result += ress
                break
                default:
                stack.push(op)
                result+=Number(stack.at(-1))
            }
        }
        // for (const st of stack){
        //     result +=Number(st) 
        // }
        return result
    }
}
