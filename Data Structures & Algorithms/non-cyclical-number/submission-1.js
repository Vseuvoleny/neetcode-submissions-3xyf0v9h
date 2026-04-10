class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const arrOfResults = [];
        let isHappy = false
        const map = String(n).split('').map(Number);
        let result = 0;
        for(let i = 0;i<map.length;i++ ){
            const elem = map[i];
            result += Math.pow(elem,2);
        }


        if(result === 1){
            return true
        } else {
           
            while(true){
                 console.log(result)
                arrOfResults.push(result);
                result = 0;
               
          
                    console.log({arrOfResults})
                if (arrOfResults.at(-1) > 9){
                 const map = String(arrOfResults.at(-1)).split('').map(Number);
                 for(let i = 0;i<map.length;i++ ){
                        const elem = map[i];
                        result += Math.pow(elem,2);
        }
        console.log(result)
                } else {
                     result += Math.pow(arrOfResults.at(-1),2);
                }

                if (result ===1 ){
                    return true
                }
                      if (arrOfResults.includes(result)){
                   
                    return false
                }
            }
        }

    }
}
