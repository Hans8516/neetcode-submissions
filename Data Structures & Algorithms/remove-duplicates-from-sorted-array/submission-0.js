class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let start = 0, idx = 0;
        while(idx<nums.length) {
            if(nums[idx]===nums[start]) {
                idx++
            } else {
                start++;
                nums[start]=nums[idx];
                idx++;
            }
        }
        return start+1;
    }
}
