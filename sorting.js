const arr = [1, 2, 3, 4, 545, 54, 52, 35, 4436, 56, 21, 542, 547, 232, 212, 32, 231, 42, -1]

// ! Bubble Sort = { Time Complexity: O(N^2) }

const bubbleSort = arr => {
    arr = arr.slice()
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    console.log('Bubble sort :', arr);
    return arr
}




// ! Selection Sort  = { Time complexity :O(N^2) }
const selectionSort = arr => {
    arr = arr.slice()
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

    }

    return console.log('Selction Sort', arr);
}




// ! insertion Sort =  { Time Complexity: O(N^2) }

const insertionSort = arr => {
    arr = arr.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1])
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            else
                break;
        }
    }

    return console.log('Insertion Sort :', arr);
};



// ! Quick Sort  = { Time complexity :O(n log n) }

const quickSort = arr => {
    if (arr.length <= 1) return arr;
    arr = arr.slice();

    const pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArray.push(el) : rightArray.push(el)
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}



// ! Merge Sort = { Time complexity :O(n log n) }

// const merge = (left, right) => {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }


const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return [...res, ...left, ...right]
}

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}






