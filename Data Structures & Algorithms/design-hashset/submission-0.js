class MyHashSet {
    constructor() {
        this.set=[]
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.contains(key)) return;
        this.set.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.contains(key)){
            this.set = this.set.filter(value=>value!==key);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        for (const ele of this.set) {
            if (ele === key) return true;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
