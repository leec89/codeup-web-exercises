"use strict";

// From Alfredo

// Get the sum of two arrays...actually the sum of all their elements.
// P.S. Each array includes only integer numbers.
// Example input arrays:
let arr_1 = [3, 5, 20, 5,  7,  2,  45, 75, 89, 21, 22]; // -->
let arr_2 = [9, 34, 42, 55, 71, 24, 4,  23,  90, 25, 26]; // -->
// Example output:
// 627

// Example output:
// 627
// console.log(test(arr_1, arr_2))

function test (arr_1, arr_2) {
    console.log('Original input arrays:\n', arr_1, '\n', arr_2)
    var c = []
    for (var i = 0; i < Math.max(arr_1.length, arr_2.length); i++){
        c.push((arr_1[i] || 0) + (arr_2[i] || 0))
    }
    console.log('Return test function is an array of sum of elements in each index of the array:', c);

    var val1 = arr_1.reduce((p, c) => p + c);
    console.log('Array 1 sum is', val1);
    var val2 = arr_2.reduce((p, c) => p + c);
    console.log('Array 2 sum is', val2);


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
    }) + arr2.reduce(function (prev, curr) {
        return prev + curr
    })
}

// Using arrow function notation
function test3 (a1, a2) {
    return a1.reduce((p, c) => p + c, 0) + a2.reduce((p, c) => p + c);
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

console.log(test(arr_1, arr_2))
console.log(test2(arr_1, arr_2))
console.log(test3(arr_1, arr_2))

// Example output:
// 627
// console.log(test(arr_1, arr_2))

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = nums1.concat(nums2)                   //merge num1 and num2 into new num3 array
    nums3.sort((a,b) => a-b);                           //sort num3 array
    const mid = Math.floor(nums3.length / 2);        //find midpoint index of num3 array
    return nums3.length % 2 !== 0                       //if odd number of elements in num3 array
        ? nums3[mid]                                        //median is at index midpoint of num3 array
        : (nums3[mid - 1] + nums3[mid]) / 2;                //else for even elements, average the elements at the two midpoints
};

console.log(findMedianSortedArrays(arr_1, arr_2))

