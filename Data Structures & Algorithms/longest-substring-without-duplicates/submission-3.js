class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length==0) {return 0;}
        if(s.length==1) {return 1;}

        let presence = new Array(128).fill(0);
        let start = 0, end=start;
        let result = 0;



        while(end<s.length) {
            const code = s[end].charCodeAt(0);
            presence[code]++;
            while(presence[code]>1){
                presence[s[start].charCodeAt(0)]--;
                start++;
            }
            end++;
            result = Math.max(result, end-start);
        }
        return result
    }
}
