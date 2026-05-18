class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const splitted = path.split('/')
        splitted.forEach((s)=>{
            if (s) {
            if (s === '..'){
                stack.pop()
            }  else if (s!== '.'){
                stack.push(s)
            }
            }
        })
        // console.log({splitted,stack})

        return `/${stack.join('/')}`
    }
}
