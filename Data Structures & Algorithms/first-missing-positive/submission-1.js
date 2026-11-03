class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums = nums.filter(value=>value>0);
        if(!nums.length) return 1;
        for(const num of nums) {
            if(num>nums.length) continue;
            const index = Math.abs(num)-1;
            nums[index] = nums[index] > 0 ? nums[index] * -1 : nums[index];
        }
        let i =0
        for(i =0;i<nums.length;i++){
            if(nums[i]>0)
            return i+1;
        }
        return i+1;
    }
}
