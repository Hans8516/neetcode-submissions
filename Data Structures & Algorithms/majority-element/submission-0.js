class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let current_major = nums[0];
        let current_major_count = 1;
        for(let i =1;i<nums.length;i++){
            if(nums[i]!==current_major) {
                current_major_count--;
                if(current_major_count<1) {
                    current_major=nums[i];
                    current_major_count=1;
                }
            }else {
                current_major_count++;
            }
        }
        return current_major;
    }
}
