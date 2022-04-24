"use strict";

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// https://leetcode.com/problems/median-of-two-sorted-arrays/

let arr_1 = [3, 5, 20, 5,  7,  2,  45, 75, 89, 21, 22]; // --> sum is 294
let arr_2 = [9, 34, 42, 55, 71, 24, 4,  23,  90, 25, 26]; // --> sum is 403

var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = nums1.concat(nums2)                   //merge num1 and num2 into new num3 array
    nums3.sort((a,b) => a-b);                           //sort num3 array
    const mid = Math.floor(nums3.length / 2);        //find midpoint index of num3 array
    return nums3.length % 2 !== 0                       //if odd number of elements in num3 array
        ? nums3[mid]                                        //median is at index midpoint of num3 array
        : (nums3[mid - 1] + nums3[mid]) / 2;                //else for even elements, average the elements at the two midpoints
};

console.log(findMedianSortedArrays(arr_1, arr_2))

// From Alfredo
// Find sum of two arrays

var c = []
for (var i = 0; i < Math.max(arr_1.length, arr_2.length); i++){
    c.push((arr_1[i] or 0) + (arr_2[i] || 0))
}
return c

// Placed inside of a function to test the answers out

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