class HashTable {
    constructor(size = 45) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }
    #hash(key) {
        let strKey = String(key);
        let total = 0;
        for (let i = 0; i < strKey.length; i++) {
            total = (total * 32 + strKey.charCodeAt(i)) % this.size;
        }
        return total;
    }
    set(key, value) {
        const index = this.#hash(key);
        const bucket = this.table[index];
        for (const item of bucket) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }
        bucket.push({ key, value });
    }

    get(key) {
        const index = this.#hash(key);
        const bucket = this.table[index];
        for (const item of bucket) {
            if (item.key === key) {
                return item.value;
            }
        }
        return null;
    }

    addArray(arr) {
        for (const key of arr) {
            const value = this.get(key) || 0;
            this.set(key, value + 1);
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket.length > 0) {
                for (const item of bucket) {
                    if (item) {
                        console.log(`${item.key} : ${item.value}`);
                    }
                }
            }
        }
    }

    maxCount() {
        let max = { key: null, value: 0 };
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            for (const item of bucket) {
                if (item) {
                    if (item.value > max.value) {
                        max = { key: item.key, value: item.value };
                    }
                }
            }
        }
        console.log('Most counted:', max);
    }
    remove(key){
        let index = this.#hash(key)
        const bucket = this.table[index]
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key===key) {
                bucket[i] =undefined
            }
        }
        return "Not Found";
    }
    size(){
        return this.table.length;
    }
    isEmpty(){
        return this.size() === 0
    }

}

const hs = new HashTable();
hs.addArray( [1, 1, 1, 4, 5, 34, 54, 76, 8, 9, 0, 7, 5, 4, 3, 23, 34, 54, 577, 87, 832, 1, 1, 3, 4, 555, 6, 7, 7, 6, 8, 89, 9, 9, 7, 7] );
hs.display();
hs.maxCount();
hs.remove(1)
hs.display();
hs.maxCount();






