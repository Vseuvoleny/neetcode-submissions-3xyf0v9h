class Solution {




    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        for (let elem of s){
            if (elem !== ']') {
                stack.push(elem)
            } else {
               
                    let subString = '';
                    let digit = '';
   
                // console.log({poped,stack})
                while (stack.length>0 && stack[stack.length - 1] !=='['){
                    subString = stack.pop() + subString;
                    continue
                }
                stack.pop();
                console.log()
                while (stack.length>0 && !isNaN(stack[stack.length - 1])){
                    digit = stack.pop() + digit
                    continue
                }

                const repeated = subString.repeat(Number(digit));
                stack.push(repeated)
                console.log({repeated,stack})
            }

        }
          console.log({stack})
          return stack.join('')
    }
}
