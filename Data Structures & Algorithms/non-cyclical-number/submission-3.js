class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const arrOfResults = [];
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

                arrOfResults.push(result);
                result = 0;
               
          

                if (arrOfResults.at(-1) > 9){
                 const map = String(arrOfResults.at(-1)).split('').map(Number);
                 for(let i = 0;i<map.length;i++ ){
                        const elem = map[i];
                        result += Math.pow(elem,2);
        }

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
