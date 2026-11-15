class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = new Array(height.length), rightMax = new Array(height.length);
        
        let max=height[0];
        
        for(let i=0;i<height.length;i++){
            if(height[i]>=max) {
                leftMax[i] = -1;
                max = height[i]
            } else {
                leftMax[i] = max;
            }
        }

        max = -1;
        for(let i=height.length-1;i>=0;i--){
            if(height[i]>=max) {
                rightMax[i] = -1;
                max = height[i]
            } else {
                rightMax[i] = max;
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
