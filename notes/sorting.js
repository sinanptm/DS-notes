const arr = [1, -1, -34, 2, 4, 343, 54, 213213, 6, 67, 5, 34, 3, 43, 34, 2124, 56, 21, 5, 6, 67, 23, 34, 432, 4324,]


const bubble = arr => {
    arr = arr.slice();
    let change
    do {
        change = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]){
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
                change = true;
            }
        }
    } while (change);

    console.log(arr);
}
bubble(arr)