class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = (total * 31 + key.charCodeAt(i)) % this.size;
        }
        return total;
    }

    set(key, value) {
        let index = this.hash(key);

        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size;
        }

        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.hash(key);

        while (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);

        while (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                delete this.table[index];
                return;
            }
            index = (index + 1) % this.size;
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] !== undefined) {
                console.log(`Key: ${this.table[i].key}, Value: ${this.table[i].value}`);
            }
        }
    }
}

// Example usage:
const table = new HashTable();
table.set('me', 'sinan');
table.set('aou', 'love');
table.display();








class Hash {
    constructor(size = 32) {
        this.size = size
        this.table = new Array(size)
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total = (total * 32 + key.charCodeAt(i)) % this.size

        }
        return total
    }
    set(key, val) {
        let index = this.hash(key)
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size
        }
        this.table[index] = {key,val}
    }
    get(key){
        let index = this.hash(key)
    }
}