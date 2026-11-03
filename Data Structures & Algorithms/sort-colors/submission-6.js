class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0);
        for(const num of nums) {
            count[num]++;
        }
        let index = 0;
        console.log(count)
        for(let i =0;i<nums.length;){
            if(count[index]<1) {index++;}
            else {
                nums[i]=index;
                count[index]--;
                i++;
            }
        }
    }
}
