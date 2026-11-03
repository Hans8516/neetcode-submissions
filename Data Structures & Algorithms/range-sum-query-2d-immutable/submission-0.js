class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.mat=matrix.map(row=>[...row]);
        this.rows=matrix.length;
        this.column=matrix[0].length;
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.column;j++) {
                const diagonal = (i>0 && j>0) ? this.mat[i-1][j-1] : 0;
                const left = (i>0) ? this.mat[i-1][j] : 0;
                const up = (j>0) ? this.mat[i][j-1]  : 0;

                this.mat[i][j] = matrix[i][j] + left + up - diagonal
            }
        }
    console.log(this.mat)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const left = row1>0 ? this.mat[row1-1][col2]:0;
        const up = col1>0 ? this.mat[row2][col1-1]:0;
        const diag = row1>0 && col1>0 ? this.mat[row1-1][col1-1]:0;
        return this.mat[row2][col2]-left-up+diag;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
