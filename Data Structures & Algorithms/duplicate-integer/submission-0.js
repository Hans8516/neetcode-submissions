class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const presence = {};
        for(const num of nums){
            if(presence[num] == 1) {
                return true;
            } else {
                presence[num] = 1
            }
        }
        return false
    }
}
