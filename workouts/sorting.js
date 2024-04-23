var array = [1, -1, -34, 2, 4, 343, 54, 213213, 6, 67, 5, 34, 3, 43, 34, 2124, 56, 21, 5, 6, 67, 23, 34, 432, 4324, 102]
const descendingBubbleSort = arr => {
    arr = arr.slice();
    let changed;
    do {
        changed = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                changed = true;
            }
        }
    } while (changed);
    console.log("Descending Bubble Sort:", arr);
}

const ascendingBubbleSort = arr => {
    arr = arr.slice();
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    console.log("Ascending Bubble Sort:", arr);
}

const ascendingSelectionSort = arr => {
    arr = arr.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log("Ascending Selection Sort:", arr);
}

const descendingSelectionSort = arr => {
    arr = arr.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) maxIndex = j;
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
    console.log("Descending Selection Sort:", arr);
}


const descendingInsertionSort = arr => {
    arr = arr.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] > arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
    console.log('descendingInsertionSort', arr);
};


const bb = arr => {
    arr = arr.slice()
    let swapped
    let n = arr.length - 1
    do {
        swapped = false
        for (let i = 0; i < n; i++) {
            if (arr[i] < arr[i + 1]) {
                swapped = true
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }

        }
        n--;
    } while (swapped);
}




const ss = arr => {
    arr = arr.slice()
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxIndex]) maxIndex = j
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
    }
}


const ii = arr => {
    arr = arr.slice()
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] < arr[j])
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            else
                break;
        }
    }
    return arr
}


const q = arr =>{
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let right = [], left = []
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i]<pivot? left.push(arr[i]):right.push(arr[i])
    }

    return [...q(left),pivot,...q(right)]
}




const ins = arr =>{
    arr = arr.slice()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j]<arr[j-1]; j--) {
           [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
        }
    }
    return arr
}


const selection = arr =>{
    arr = arr.slice()
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i
        for (let j = i+1; j < arr.length; j++) {
           if(arr[minIndex]>arr[j]){
             minIndex = j
           }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}




const merge = (left,right)=>{
    let res = []
    while (left.length&&right.length) {
        if (left[0]<=right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return [...res,...left,...right]
}

const mergeSort = arr =>{
    if(arr.length<=1) return arr
    const middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left,right)
}


const quickSort = arr =>{
    if(arr.length<=1) return arr
    arr = arr.slice()
    let left=[] , right = []
    let pivot = arr[arr.length-1]
    for (let i = 0; i < arr.length-1; i++) {
        pivot <arr[i] ?left.push(arr[i]):right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
    
}
const bubble = arr =>{
    arr = arr.slice()
    let swapped , n = arr.length-1
    do {
        swapped = false
        for (let i = 0; i <n; i++) {
            if (arr[i]<arr[i+1]) {
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
                swapped = true
            }
        }
        n--;
    } while (swapped);
    return arr
}



const quick = arr=>{
    if (arr.length<=1) {
        return arr
    }
    let pivot = arr[arr.length-1],left = [], right = []
    for (let i = 0; i < arr.length-1; i++) {
        pivot<arr[i]?left.push(arr[i]):right.push(arr[i])
    }
    return [...quick(left),pivot,...quick(right)]

}

let sort = (left,right)=>{
    let res = []
    while (left.length&&right.length) {
        if(left[0]<right[0]) res.push(left.shift())
        else res.push(right.shift())
    }
    return [...res,...left,...right]
    
}

const msort = arr=>{
    if(arr.length<=1){
        return arr
    }  
    let middle = Math.floor(arr.length/2)
    let left = msort(arr.slice(0,middle))   
    let right = msort(arr.slice(middle))
    return sort(left,right)
}





const sn = arr=>{
    for (let i = 0; i < arr.length-1; i++) {
       let min = i
       for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[min]) {
                min = j
            }
        
       }
       [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}



const is = arr =>{
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j]>arr[j-1]; j--) {
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            
        }
        
    }
    return arr
}



console.log(is(array));