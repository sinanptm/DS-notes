
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








// const arr = [2,3,4,54,1,32,34,5,1,4,21,4,5,21,43]


// class Stacck {
//     constructor(arr){
//         this.bucket =arr
//     }
//     pop(){
//         return this.bucket.pop()
//     }
//     findeven(){
//         const sta = []
//         for (let i = 0; i < this.bucket.length; i++) {
//             const el = this.pop()
//            if (el%2!==0) {
//              sta.unshift(el)
//            }
//         }
//         this.bucket = sta
//         return this.bucket
//     }
// }

// const remove = arr=>{
//     const sta = new Stacck(arr)
//     return sta.findeven()
// }







const bubble = arr =>{
    let swapped 
    let n = arr.length -1
    do {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {  
                swapped = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
        n--;
    } while (swapped);
    
    return arr;
}

console.log(bubble([2,3,7,5,8]));