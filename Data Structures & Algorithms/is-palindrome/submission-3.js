class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [start, end] = [0, s.length-1];
        while(start<end){
            if(!this.isValidLetter(s[start])) {
                start++;
                continue;
            }
            if (!this.isValidLetter(s[end])) {
                end--;
                continue;
            }
            if(s[start].toLowerCase()!==s[end].toLowerCase()) return false;
            start++;
            end--;
        }
        return true
    }

    isValidLetter(s) {
        const code = s.toLowerCase().charCodeAt(0)
        return (code>96 && code<123) || (code>='0'.charCodeAt(0)&& code<='9'.charCodeAt(0));
    }
}
