class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = 0
    }
    shift(data) {
        this.size++
        this.head = new Node(data, this.head)
    }
    remove(key) {
        let cur = this.head
        let prev = null
        while (cur) {
            if (cur.data.key === key) {
                if (prev) {
                    prev.next = cur.next
                    return
                } else {
                    this.head = cur.next
                }
                this.size--;
                return cur.data
            }
            prev = cur
            cur = cur.next
        }
    }
    getDatas() {
        let res = []
        let cur = this.head
        while (cur) {
            res.push(cur.data)
            cur = cur.next
        }
        return res
    }
    getOne(key) {
        let cur = this.head
        while (cur) {
            if (cur.data.key === key) {
                return cur.data
            }
            cur = cur.next
        }
        return null
    }
    length() {
        return this.size
    }
    isEmpty() {
        return this.length() === 0
    }
}





class HashTable {
    constructor(size = 54) {
        this.size = size
        this.count = 0
        this.table = new Array(size).fill(null).map(() => new LinkedList())
    }
    #hash(key) {
        let total = 0
        key = String(key)
        for (let i = 0; i < key.length; i++) {
            total = (total * 32 + key.charCodeAt(i)) % this.size
        }
        return total
    }
    set(key, value) {
        let index = this.#hash(key)
        let ls = this.table[index]
        ls.shift({ key, value })
        this.count++
        if (this.count / this.size > 0.7) {
            this.resize(this.size * 2)
        }

    }
    remove(key) {
        const index = this.#hash(key)
        const ls = this.table[index]
        const res = ls.remove(key)
        if (res !== null) {
            this.count--
        }
        if ((this.count - 1) / this.size < 0.3 && this.size > 53)
            this.resize(Math.floor(this.size / 2));
        return res
    }
    get(key) {
        const index = this.#hash(key)
        let ls = this.table[index]
        return ls.getOne(key)
    }
    getAll() {
        let result = [];
        this.table.forEach(list => {
            result = result.concat(list.getDatas());
        });
        return result;
    }
    resize(size) {
        const oldTable = this.table
        this.size = size
        this.count = 0;
        this.table = new Array(size).fill(null).map(() => new LinkedList())
        oldTable.forEach(list => {
            list.getDatas().forEach(item => {
                this.set(item.key, item.value)
            })
        })
    }
 
}



const table = new HashTable();
table.set("name",'sinan');
table.set('world','home');
table.set('age',19);
console.log(table.get('age'));
table.set('number',8089507749);
console.log(table.getAll());
