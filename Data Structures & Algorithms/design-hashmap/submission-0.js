class MyHashMap {
    constructor() {
        this.hashmap={};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.hashmap[key]=value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(key in this.hashmap){
            return this.hashmap[key];
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete(this.hashmap[key]);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
