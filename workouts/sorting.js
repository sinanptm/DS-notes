const arr = [1, -1, -34, 2, 4, 343, 54, 213213, 6, 67, 5, 34, 3, 43, 34, 2124, 56, 21, 5, 6, 67, 23, 34, 432, 4324, 102]
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

descendingInsertionSort(arr)


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