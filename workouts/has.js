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
        return null;
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
    getOne(key){
        let cur = this.head;
        while (cur) {
            if (cur.data.key === key) {
                return { [cur.data.key]: cur.data.value };
            }
            cur = cur.next;
        }
        return null;
    }
}

class HashLinked {
    constructor(size = 67) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => new LinkedList());
    }



    #hash(key) {
        let total = 0;
        key = String(key);
        for (let i = 0; i < key.length; i++) {
            total = (total * 32 + key.charCodeAt(i)) % this.size;
        }
        return total;
    }

    set(key, value) {
        let index = this.#hash(key);
        let list = this.table[index];
        list.insert({ key, value });
    }

    remove(key) {
        let index = this.#hash(key);
        let list = this.table[index];
        return list.remove(key);
    }

    getAll() {
        let result = [];
        this.table.forEach(list => {
            result = result.concat(list.getData());
        });
        return result;
    }

    getOne(key){
        let index = this.#hash(key);
        let list = this.table[index];
        console.log(list.getOne(key));
    }
}

const table = new HashLinked(234);
table.set('name', 'sinan');
table.set('age', 19);
table.getOne('name')
console.log(table.getAll());
