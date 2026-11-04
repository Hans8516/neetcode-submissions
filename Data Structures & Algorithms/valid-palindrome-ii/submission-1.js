class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let [start, end] = [0, s.length-1];
        while(start<end){
            if(s[start]!==s[end]){
                return this.isPalindrome(s,start+1,end) || this.isPalindrome(s,start,end-1);
            }else {
                start++;
                end--;
            }
        }
        return true;
    }

    isPalindrome(s, start, end) {
        if(!s.length) return true;
        while(start<end){
            if(s[start]!==s[end]) return false;
            start++;
            end--;
        }
        return true;
    }
}
