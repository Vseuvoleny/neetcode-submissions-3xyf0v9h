class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /**
 * @param {string} s
 * @return {boolean}
 */

    const stack = [];
    const closeBrackets = [')','}',']'];
    const openBrackets = ['(','{','['];


    for (let elem of s){
        // не закрывающиеся скобка
        if (!closeBrackets.includes(elem)){
            // кладем в стек
            stack.push(elem)
        } else {
            // if (stack.length === 0 ){
            //     return false
            // }
            // иначе
            const lastElem= stack[stack.length-1];
            const indexOfOpen = openBrackets.indexOf(lastElem);
            const indexOfClose = closeBrackets.indexOf(elem);
            if (indexOfOpen !== indexOfClose) {
                    return false
                }
            // берем последний элемент стека
            // если это открывающиеся скобка
            if (openBrackets.includes(lastElem)){
                    stack.pop() 
            }
        }
    }
    return stack.length === 0
};
    }
