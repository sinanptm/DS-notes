const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const leanerSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return console.log(i);
    }
    return console.log('Not found');
}
// leanerSearch(arr, 2121)  // O(n)





// binary serch is only usable in teh siorted array

// const binarySearch = (arr, target) => {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (target === arr[middleIndex])
//             return middleIndex;
//         if (target < arr[middleIndex])
//             rightIndex = middleIndex - 1;
//         else
//             leftIndex = middleIndex + 1;
//     }
//     return "Not found";
// }

// console.log(binarySearch(arr, 221));  // O(log n )



const search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) return 'Not Found';
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex])
        return search(arr, target, leftIndex, middleIndex - 1);
    else
        return search(arr, target, middleIndex + 1, rightIndex);
}

const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

// console.log(recursiveBinarySearch(arr, 2)); // O(log n)

