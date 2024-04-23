class HashTable {
    constructor(size = 53) {
        this.size = size;
        this.table = new Array(size);
        this.count = 0; 
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = (total * 31 + key.charCodeAt(i)) % this.size;
        }
        return total;
    }
    resize(newSize) {
        const oldTable = this.table;
        this.size = newSize;
        this.table = new Array(newSize);
        this.count = 0;

        for (const item of oldTable) {
            if (item !== undefined) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if ((this.count + 1) / this.size > 0.7) {
            this.resize(this.size * 2);
        }

        let index = this.hash(key);

        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size;
        }

        if (this.table[index] === undefined) {
            this.count++;
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
                this.count--;
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
