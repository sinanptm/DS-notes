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







class Hash {
    constructor(size = 54) {
        this.size = size;
        this.table = new Array(size);
    }

    #hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = (total * 31 + key.charCodeAt(i)) % this.size;
        }
        return total;
    }

    set(key, value) {
        let index = this.#hash(key);
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size;
        }
        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.#hash(key);
        while (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }

    remove(key) {
        let index = this.#hash(key);
        while (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                this.table[index] = undefined;
                return;
            }
            index = (index + 1) % this.size;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`Key ${this.table[i].key} Value ${this.table[i].value}`);
            }
        }
    }
}

const hs = new Hash();
hs.set('name', "Sinan");
hs.set('Age', 18);
console.log(hs.get('name')); // Output: Sinan
hs.display();
