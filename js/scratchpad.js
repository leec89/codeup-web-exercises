"use strict";

// From Alfredo

function test (arr_1, arr_2) {
    console.log('Original input arrays:\n', arr_1, '\n', arr_2)
    var c = []
    for (var i = 0; i < Math.max(arr_1.length, arr_2.length); i++){
        c.push((arr_1[i] || 0) + (arr_2[i] || 0))
    }
    console.log('Return test function is an array of sum of elements in each index of the array:', c);

    console.log('Return of the sum of the arr')
    var startVal = 0;
    return c.reduce(function (prev, curr) {
        return prev + curr
    }, startVal)
}


// Boiled down to just the return line
function test2 (arr1, arr2) {
    return arr1.reduce(function (prev, curr) {
        return prev + curr
    }, 0) + arr2.reduce(function (prev, curr) {
        return prev + curr
    }, 0)
}

// Using arrow function notation
function test3 (a1, a2) {
    return a1.reduce((p, c) => p + c, 0) + a2.reduce((p, c) => p + c, 0)
}

/*

// Reduce Method skeleton:
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)

// Reduce arrow function
let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)

*/

// Get the sum of two arrays...actually the sum of all their elements.
// P.S. Each array includes only integer numbers.
// Example input arrays:
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 627
console.log(test(arr_1, arr_2))
console.log(test2(arr_1, arr_2))
console.log(test3(arr_1, arr_2))