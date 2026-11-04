class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let [s1,s2,s3] = [0,0,0];
        let result = "";
        while(s3<word1.length+word2.length){
            if(s1<word1.length) {
                result=result+word1[s1];
                s1++;
                s3++;
            }
            if(s2<word2.length) {
                result=result+word2[s2];
                s2++;
                s3++;
            }
        }
        return result
    }
}
