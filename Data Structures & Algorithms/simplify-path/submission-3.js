class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const splitted = path.split('/')
        splitted.forEach((s)=>{
            if (s && s === '..'){
                stack.pop()
            }  else if (s && s!== '.'){
                stack.push(s)
            }
        })

        return `/${stack.join('/')}`
    }
}
