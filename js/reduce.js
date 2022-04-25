"use strict";

// 5 Use Cases for reduce() in JavaScript
// https://javascript.plainenglish.io/5-use-cases-for-reduce-in-javascript-61ed243b8fef

// 1. Sum all the values of an array
// 2. Sum of values in an object array
// 3. Flatten an array of arrays
// 4. Grouping objects by a property
// 5. Remove duplicates in an array

// ************************************************

// 1. Sum all the values of an array

const studentResult = [67, 90, 100, 37, 60];

const total = studentResult.reduce((accumulator, currentValue) => accumulator +currentValue, 0);

console.log(total); // 354

// ************************************************

// 2. Sum of values in an object array

const studentResult = [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
];

const total = studentResult.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(total);  // 251

// ************************************************

// 3. Flatten an array of arrays

const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(oneDArr);  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// ************************************************

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

/*
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

// ************************************************

// 5. Remove duplicates in an array

/*
In the below code fragment, duplicates in the duplicatedArr array are removed. First, an empty array is assigned to the accumulator as initial value. accumulator.includes() checks whether each element of the duplicatedArr array is already available in the accumulator. If the currentValue is not available in the accumulator, it is added using the push().
 */


const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(removeDuplicatedArr);  // [ 1, 5, 6, 7, 8, 9 ]
