// ! big o notation or worst-case complexity
// * big o is expressed on interms of input


// todo: in Array

// * Accessing an element by index: O(1)
// - Directly accessing an element by its index in an array is fast because arrays have contiguous memory allocation.

// * Inserting or removing an element at the end: O(1)
// - Adding or removing an element at the end of an array is quick as it only involves updating the array's length.

// * Inserting or removing an element at the beginning or middle: O(n)
// - Inserting or removing elements from anywhere except the end requires shifting other elements, which takes time proportional to the array's size.

// * Searching for an element (linear search): O(n)
// - Searching for an element in an unsorted array requires checking each element until the target is found or the end is reached.

// * Sorting an array (efficient algorithms): O(n log n)
// - Efficient sorting algorithms can sort an array in O(n log n) time, making them suitable for large datasets.

// * Accessing length: O(1)
// - Accessing the length property of an array is a simple operation that returns the number of elements in constant time.

// * Copying an array: O(n)
// - Copying an array involves iterating through each element and copying it to a new array, taking time proportional to the array's size.


// * shift/unshift/concat/slice/splice  -O(n)
// * foreach/map/filter/reduce  -O(n)

// * Big-O guide:
// Calculation not dependent on input size – O(1)
// 1 Loop – O(n)
// 2 Nested Loops – O(n^2)
// Input size reduced by half – O(logn)


// ! Fubunaci sequence -
// * Big-O = O(n)

// function finbunachi (n){
//     let fib = [0,1];
//     for (let i = 2; i < n; i++){
//       fib[i] = fib[i-1] + fib[i-2];
//     }
//  return fib
// }
// console.log(finbunachi(7))



// ! factorial  
// * Big-O O(n)

// function factorial (n){
//     let res = 1;                                                                                                                                                                                                                                                                                                                       
//     for (let i = 2; i <= n; i++){
//       res *= i;
//     }
//     return res;
//   }

//   console.log(factorial(3));


// ! primeNumbers
// * O(sqrt(n))

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }
// console.log(isPrime(5)); 



// ! Recursion

// recursion is a problem soving technique where the solutuion depends on solutions to smaller instances of the same problem 
// * When a function call it's self

// todo: Recursive Fibunachi sequence
//  Fn = Fn-1 + Fn-2
//  F0 = 0 and F1 = F1 = 1
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 