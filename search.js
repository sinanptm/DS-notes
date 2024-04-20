const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const leanerSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return console.log(i);
    }
    return console.log('Not found');
}
// leanerSearch(arr, 2121)  // O(n)


// binary serch is only usable in teh siorted array

const binarySearch = (arr, target) => {
    let  left = 0;
    let rigth =arr.length-1;
    while (left<=rigth) {
        let middle = Math.floor((left+rigth)/2)
        if(target ==arr[middle]) return middle
        if(target>arr[middle]) left = middle+1
        else rigth = middle-1
    }
    return "Not found";
}

// console.log(binarySearch(arr, 221));  // O(log n )


const reqersieveBinarySearch =(arr, target, left = 0, right = arr.length) => {
    if (left > right) return -1
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) return middle;
    if (target > arr[middle]) return reqersieveBinarySearch(arr, target, middle + 1, right)
    else return reqersieveBinarySearch(arr, target, left, middle - 1);
}


const req = (arr, target , left =9, right = arr.length)=>{
    if (left > right) return -1; 
    
    let middle = Math.floor((left + right) / 2);
    
    if (target === arr[middle]) {
        return middle;  
    } else if (target > arr[middle]) {
        return req(arr, target, middle + 1, right); 
    } else {
        return req(arr, target, left, middle - 1); 
    }
}





