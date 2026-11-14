class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i=m-1, j=n-1, idx=m+n-1;
        while(idx>=0){
            if(j>=0 && i>=0){
                if(nums1[i]>nums2[j]) {
                nums1[idx]=nums1[i];
                i--;
                idx--;
            }
            else {
                nums1[idx]=nums2[j];
                j--;
                idx--;
            }
            }
            else if(i<0){
                nums1[idx]=nums2[j];
                j--;
                idx--;
            }
            else if(j<0){
                nums1[idx]=nums1[i];
                i--;
                idx--;
            }
            
        }
    }
}
