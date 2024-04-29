// class HashTable {
//     constructor(size = 45) {
//         this.size = size;
//         this.table = new Array(size).fill(null).map(() => []);
//     }
//     #hash(key) {
//         let strKey = String(key);
//         let total = 0;
//         for (let i = 0; i < strKey.length; i++) {
//             total = (total * 32 + strKey.charCodeAt(i)) % this.size;
//         }
//         return total;
//     }
//     set(key, value) {
//         const index = this.#hash(key);
//         const bucket = this.table[index];
//         for (const item of bucket) {
//             if (item.key === key) {
//                 item.value = value;
//                 return;
//             }
//         }
//         bucket.push({ key, value });
//     }

//     get(key) {
//         const index = this.#hash(key);
//         const bucket = this.table[index];
//         for (const item of bucket) {
//             if (item.key === key) {
//                 return item.value;
//             }
//         }
//         return null;
//     }

//     addArray(arr) {
//         for (const key of arr) {
//             const value = this.get(key) || 0;
//             this.set(key, value + 1);
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             const bucket = this.table[i];
//             if (bucket.length > 0) {
//                 for (const item of bucket) {
//                     if (item) {
//                         console.log(`${item.key} : ${item.value}`);
//                     }
//                 }
//             }
//         }
//     }

//     maxCount() {
//         let max = { key: null, value: 0 };
//         for (let i = 0; i < this.table.length; i++) {
//             const bucket = this.table[i];
//             for (const item of bucket) {
//                 if (item) {
//                     if (item.value > max.value) {
//                         max = { key: item.key, value: item.value };
//                     }
//                 }
//             }
//         }
//         console.log('Most counted:', max);
//     }
//     remove(key){
//         let index = this.#hash(key)
//         const bucket = this.table[index]
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i].key===key) {
//                 bucket[i] =undefined
//             }
//         }
//         return "Not Found";
//     }
//     size(){
//         return this.table.length;
//     }
//     isEmpty(){
//         return this.size() === 0
//     }

// }

// const hs = new HashTable();

// hs.addArray( [1, 1, 1, 4, 5, 34, 54, 76, 8, 9, 0, 7, 5, 4, 3, 23, 34, 54, 577, 87, 832, 1, 1, 3, 4, 555, 6, 7, 7, 6, 8, 89, 9, 9, 7, 7] );
// // hs.display();
// // hs.maxCount();
// // hs.remove(1)
// // hs.display();
// // hs.maxCount();










class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    remove(key) {
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.data.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
                return current.data.value;
            }
            prev = current;
            current = current.next;
        }
        return null; // Key not found
    }

    getData() {
        let res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.data);
            cur = cur.next;
        }
        return res;
    }

    getOne(key) {
        let cur = this.head;
        while (cur) {
            if (cur.data.key === key) {
                return { [cur.data.key]: cur.data.value };
            }
            cur = cur.next;
        }
        return null; // Key not found
    }
}

class HashLinked {
    constructor(size = 54) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => new LinkedList());
        this.count = 0;                     
    }

    murmurHash3(key) {
        const seed = 0; // Seed value (can be any value)
        const c1 = 0xcc9e2d51;
        const c2 = 0x1b873593;
        const r1 = 15;
        const r2 = 13;
        const m = 5;
        const n = 0xe6546b64;
    
        let hash = seed;
        let len = key.length;
        let remainder = len % 4;
        let roundedEnd = len - remainder;
    
        for (let i = 0; i < roundedEnd; i += 4) {
            let k = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24);
            k = Math.imul(k, c1);
            k = (k << r1) | (k >>> (32 - r1));
            k = Math.imul(k, c2);
            hash ^= k;
            hash = (hash << r2) | (hash >>> (32 - r2));
            hash = Math.imul(hash, m) + n;
        }
    
        let k1 = 0;
        switch (remainder) {
            case 3:
                k1 ^= (key.charCodeAt(roundedEnd + 2) & 0xff) << 16;
            case 2:
                k1 ^= (key.charCodeAt(roundedEnd + 1) & 0xff) << 8;
            case 1:
                k1 ^= (key.charCodeAt(roundedEnd) & 0xff);
                k1 = Math.imul(k1, c1);
                k1 = (k1 << r1) | (k1 >>> (32 - r1));
                k1 = Math.imul(k1, c2);
                hash ^= k1;
        }
    
        hash ^= len;
        hash ^= hash >>> 16;
        hash = Math.imul(hash, 0x85ebca6b);
        hash ^= hash >>> 13;
        hash = Math.imul(hash, 0xc2b2ae35);
        hash ^= hash >>> 16;
    
        return hash >>> 0; 
    }

    set(key, value) {
        let index = this.murmurHash3(key);
        let list = this.table[index];
        list.insert({ key, value });
        this.count++;
        if (this.count / this.size > 0.7) {
            this.resize(this.size * 2);
        }
    }  
    
    remove(key) {
        let index = this.murmurHash3(key);
        let list = this.table[index];
        let result = list.remove(key);
        if (result !== null) {
            this.count--;
        }
        if ((this.count - 1) / this.size < 0.3 && this.size > 53) {
            this.resize(Math.floor(this.size / 2)); 
        }
        return result;
    }


    getAll() {
        let result = [];
        this.table.forEach(list => {
            result = result.concat(list.getData());
        });
        return result;
    }

    getOne(key) {
        let index = this.murmurHash3(key);
        let list = this.table[index];
        return list.getOne(key);
    }

    resize(newSize) {
        let oldTable = this.table;
        this.size = newSize;
        this.table = new Array(newSize).fill(null).map(() => new LinkedList());
        this.count = 0;

        oldTable.forEach(list => {
            list.getData().forEach(item => {
                this.set(item.key, item.value);
            });
        });
    }
}

// Testing the HashLinked class
const table = new HashLinked(234);
table.set('name', 'sinan');
table.set('age', 19);
table.remove('age');
console.log(table.getOne('name')); // Output: { name: 'sinan' }
console.log(table.getAll());
