const arr = [1, 1, 1, 4, 5, 34, 54, 76, 8, 9, 0, 7, 5, 4, 3, 23, 34, 54, 577, 87, 832, 1, 1, 3, 4, 555, 6, 7, 7, 6, 8, 89, 9, 9, 7, 7,]

class HashTable {
    constructor(size = 45) {
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
    set(key, value) {
        let index = this.hash(key)
        while (this.table[index] !== undefined && this.table[index].key !== key) {
            index = (index + 1) % this.size
        }
        this.table[index] = { key, value }
    }
    get(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                return this.table[index].value
            }
            index = (index+1)%this.size
        }
        return null
    }
    addArray(arr){
        let index 
        for (const i of arr) {
            index = this.hash(i)
            if (this.get(index)) {
                this.set(index,this.get(i)+1)
            }else{
                this.set(index,1)
            }
        }
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            console.log(`${this.table[i].key} : ${this.table[i].value}`);
        }
    }
}


const hs = new HashTable()
hs.display()
