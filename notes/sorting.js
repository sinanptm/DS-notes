const arr = [1, -1, -34, 2, 4, 343, 54, 213213, 6, 67, 5, 34, 3, 43, 34, 2124, 56, 21, 5, 6, 67, 23, 34, 432, 4324,102]
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

descendingBubbleSort(arr);
ascendingBubbleSort(arr);
ascendingSelectionSort(arr);
descendingSelectionSort(arr);

