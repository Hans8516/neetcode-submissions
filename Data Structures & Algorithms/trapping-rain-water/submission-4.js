class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = new Array(height.length), rightMax = new Array(height.length);
        
        let maxLeft=-1, maxRight=-1;
        
        for(let i=0, j=height.length-1;i<height.length, j>=0 ;i++, j--){
            if(height[i]>=maxLeft) {
                leftMax[i] = -1;
                maxLeft = height[i]
            } else {
                leftMax[i] = maxLeft;
            }

            if(height[j]>=maxRight) {
                rightMax[j] = -1;
                maxRight = height[j]
            } else {
                rightMax[j] = maxRight;
            }
        }

        let result = 0;
        for(let i=0;i<height.length;i++) {
            if(leftMax[i]!== -1 && rightMax[i] !== -1) {
                result += Math.min(leftMax[i], rightMax[i])-height[i];
            }
        }
        return result;
    }
}
