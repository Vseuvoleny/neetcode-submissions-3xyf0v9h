class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        const resultArr = [];
        for (let i = 0;i<temperatures.length;i++){
            const elem = temperatures[i];
            let days = i
            while (days<temperatures.length){
                stack.push(temperatures[days])
                if (stack.at(-1) > elem){
                    resultArr.push(stack.length-1);
                    stack =[]
                    break
                }  else if (days===temperatures.length-1){
                         resultArr.push(0);
                         stack=[]
                         break
                } else {
                    days++
                }
             
            }
    }
    return resultArr
}
}
