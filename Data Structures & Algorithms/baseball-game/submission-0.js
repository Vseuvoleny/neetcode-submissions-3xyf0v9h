class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let result = 0
        for (const op of operations){
            switch (op){
                case '+':
                const res = Number(stack.at(-1))+ Number(stack.at(-2))
                stack.push(res)
                break
                case 'C':
                stack.pop();
                break
                case "D":
                const ress = Number(stack.at(-1)) * 2;
                stack.push(ress)
                break
                default:
                stack.push(op)
            }
        }

        for (const st of stack){
            result +=Number(st) 
        }
        console.log(stack,result)
        return result
    }
}
