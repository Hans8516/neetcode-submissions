class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";


        for(const [index, letter] of Array.from(strs[0]).entries()) {
            for(const str of strs) {
                if(str[index]!==letter) {
                    return result;
                }
            }
            result += letter;
        }
        return result;
    }
}
