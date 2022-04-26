"use strict";

/**
5 Use Cases for reduce() in JavaScript
https://javascript.plainenglish.io/5-use-cases-for-reduce-in-javascript-61ed243b8fef

1. Sum all the values of an array
2. Sum of values in an object array
3. Flatten an array of arrays
4. Grouping objects by a property
5. Remove duplicates in an array
*/

/** ********************************************* */

/** 1. Sum all the values of an array */

const studentResult = [67, 90, 100, 37, 60];

const total = studentResult.reduce((accumulator, currentValue) => accumulator +currentValue, 0);

console.log(total); // 354

/** ********************************************* */

// 2. Sum of values in an object array

const studentResultArrOfObj = [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
];

const totalArrOfObj = studentResultArrOfObj.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(totalArrOfObj);  // 251

/** ********************************************* */

// 3. Flatten an array of arrays

const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(oneDArr);  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/** ********************************************* */

// 4. Grouping objects by a property

const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [],
    fail: []
}

const groupedResult = result.reduce((accumulator, current) => {
    (current.marks>=50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
    return accumulator;
}, initialValue);

console.log(groupedResult);

/**
Output of groupedResult:

{
 pass: [
  { subject: ‘Chemistry’, marks: 59 },
  { subject: ‘Applied Maths’, marks: 90 },
  { subject: ‘English’, marks: 64 }
 ],
 fail: [
  { subject: ‘Physics’, marks: 41 },
  { subject: ‘Pure Maths’, marks: 36 }
 ]
}
 */

/** ********************************************* */

// 5. Remove duplicates in an array

/**
In the below code fragment, duplicates in the duplicatedArr array are removed. First, an empty array is assigned to the accumulator as initial value. accumulator.includes() checks whether each element of the duplicatedArr array is already available in the accumulator. If the currentValue is not available in the accumulator, it is added using the push().
 */


const duplicatesArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatesArr.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(removeDuplicatedArr);  // [ 1, 5, 6, 7, 8, 9 ]

/**
 *
 *  Reduce Method skeleton:
 *  let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
 *     return previousValue + currentValue
 *     });
 *
 *  Reduce arrow function
 *  let total = [ 0, 1, 2, 3 ].reduce(
 *  (previousValue, currentValue) => previousValue + currentValue);
 *
 */

// From Alfredo

// Get the sum of two arrays...actually the sum of all their elements.
// P.S. Each array includes only integer numbers.
// Example input arrays:
let arr_1 = [3, 5, 20, 5, 7, 2, 45, 75, 89, 21, 22]; // --> 294
let arr_2 = [9, 34, 42, 55, 71, 24, 4, 23, 90, 25, 26]; // --> 403
// Example output of sum total of arrays: 294 + 403 = 697

function test(inputArr1, inputArr2) {
    console.log('Original input arrays:\n', 'Array 1:', inputArr1, '\n', 'Array 2:', inputArr2);    // Display 2 input arrays
    var c = []
    for (var i = 0; i < Math.max(inputArr1.length, inputArr2.length); i++) {                        // Sum elements at each respective index and push to new c array
        c.push((inputArr1[i] || 0) + (inputArr2[i] || 0))
    }
    console.log('Return test function is an array of sum of elements in each index of the array:', c);

    var val1 = inputArr1.reduce((p, c) => p + c);                                               // Reduce arr_1 to sum total of 294
    console.log('Array 1 sum is', val1);
    var val2 = inputArr2.reduce((p, c) => p + c);                                               // Reduce arr_2 to sum total of 403
    console.log('Array 2 sum is', val2);


    console.log('Return of the sum of the arr')                                             // Reduce c array to sum total of 697
    var startVal = 0;
    return c.reduce(function (prev, curr) {
        return prev + curr
    }, startVal)
}


// Boiled down to just the return line
function test2(arr1, arr2) {
    return arr1.reduce(function (prev, curr) {
        return prev + curr
    }) + arr2.reduce(function (prev, curr) {
        return prev + curr
    })
}

// Using arrow function notation
function test3(a1, a2) {
    return a1.reduce((p, c) => p + c, 0) + a2.reduce((p, c) => p + c);
}

console.log(test(arr_1, arr_2))
console.log(test2(arr_1, arr_2))
console.log(test3(arr_1, arr_2))

/** ********************************************* */

// combine the two arrays to be an array of arrays

function combine(arrOne, arrTwo) {
    const newArr = []
    for (var i = 0; i < Math.max(arrOne.length, arrTwo.length); i++) {
        newArr.push([arrOne[i], arrTwo[i]]);
    }
    return newArr;
}

// let arr_1 = [3, 5, 20, 5, 7, 2, 45, 75, 89, 21, 22];
// let arr_2 = [9, 34, 42, 55, 71, 24, 4, 23, 90, 25, 26];
var arrOfArrays = combine(arr_1, arr_2);
console.log('Combined arrays to become Array of Arrays:\n', arrOfArrays)
// [[3, 9], [5, 34], [20, 42], [5, 55], [7, 71], [2, 24], [45, 4], [75, 23], [89, 90], [21, 25], [22, 26]]


// Array 1 concatted with Array 2
var concatArrays = arr_1.concat(arr_2);
console.log('Concatted arr_1 TO arr_2:\n', concatArrays);
// [3, 5, 20, 5, 7, 2, 45, 75, 89, 21, 22, 9, 34, 42, 55, 71, 24, 4, 23, 90, 25, 26]


// Flattened Array of Arrays from the combine function above
var flattenedArr = arrOfArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
console.log('Flattened arr_1 and arr_2:\n', flattenedArr);
//[3, 9, 5, 34, 20, 42, 5, 55, 7, 71, 2, 24, 45, 4, 75, 23, 89, 90, 21, 25, 22, 26]


// Chaining the functions combine and reduce (to flatten) method in one line
var chainedArrOfArraysReduced = combine(arr_1, arr_2).reduce((accumulator, currentValue) => accumulator.concat(currentValue));
console.log('Chained combined and flattened arr_1 and arr_2:\n', chainedArrOfArraysReduced);
//[3, 9, 5, 34, 20, 42, 5, 55, 7, 71, 2, 24, 45, 4, 75, 23, 89, 90, 21, 25, 22, 26]


// Chaining the combine, reduce (to flatten) and then sort
var chainedReduceSorted = combine(arr_1, arr_2).reduce((accumulator, currentValue) => accumulator.concat(currentValue)).sort((a,b) => a-b);
console.log('Chained, combined, flattened and sorted arr_1 and arr_2:\n', chainedReduceSorted);
// [2, 3, 4, 5, 5, 7, 9, 20, 21, 22, 23, 24, 25, 26, 34, 42, 45, 55, 71, 75, 89, 90]

/** ********************************************* */

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = nums1.concat(nums2)                   //merge num1 and num2 into new num3 array
    nums3.sort((a, b) => a - b);                           //sort num3 array
    const mid = Math.floor(nums3.length / 2);        //find midpoint index of num3 array
    return nums3.length % 2 !== 0                       //if odd number of elements in num3 array
        ? nums3[mid]                                        //median is at index midpoint of num3 array
        : (nums3[mid - 1] + nums3[mid]) / 2;                //else for even elements, average the elements at the two midpoints
};

console.log(findMedianSortedArrays(arr_1, arr_2))
