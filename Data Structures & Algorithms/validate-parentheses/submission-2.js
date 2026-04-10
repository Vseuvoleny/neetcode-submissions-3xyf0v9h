class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const openChars = ['(','{','['];
        const closeChars = [')','}',']'];
        for (let i = 0;i<s.length;i++){
            const elem=s[i];
            if (openChars.includes(elem)){
                stack.push(elem)
            }
            if (closeChars.includes(elem)){
                if (closeChars.indexOf(elem) === openChars.indexOf(stack.at(-1))){
                    stack.pop()
                }
                else {
                    return false
                }
            }
        }
    return stack.length === 0
    }
}
