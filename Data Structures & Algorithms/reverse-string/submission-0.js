class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let start = 0;
        let end = s.length - 1;

        while(start<end){
            const c = s[start];
            s[start] = s[end];
            s[end] = c;
            start++;
            end--;
        }
    }
}
