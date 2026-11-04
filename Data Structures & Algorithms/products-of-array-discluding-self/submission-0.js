class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let rightProduct = new Array(nums.length+1).fill(1);
        let leftProduct = new Array(nums.length+1).fill(1);
        for(let i=0,j=nums.length-1; i<nums.length; i++,j--){
            leftProduct[i+1] = leftProduct[i]*nums[i];
            rightProduct[j] = rightProduct[j+1]*nums[j];
        }
        let result = [];
        for(let i=0;i<nums.length;i++) {
            result.push(leftProduct[i]*rightProduct[i+1]);
        }
        console.log(result);
        return result;
    }
}
