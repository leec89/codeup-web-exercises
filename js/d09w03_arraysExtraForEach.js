"use strict";

/**
 *
 * !! Write a function, logNums, that takes in an array and logs each number in the array !!
 *
 **/

// example given as instruction
var pies = ['apple', 'cherry', 'key lime', 'huckleberry'];
function logElements(element) {
    console.log('Element ' + element);
}
pies.forEach(logElements);

// example of generic forEach done as a for loop
// function kindLikeThis(callback) {
//     for (var i = 0; i < elements.length; i += 1) {
//         callback(element[i], i, pies);
//     }
// }
// elements.forEach(function (_, index) {
//     console.log(index);
// });

// actual exercise problem
var numbers = [7, 5, 2, 4];
function logNums(numbers) {
    // for (var i = 0; i < numbers.length; i += 1) {
    //   console.log(numbers[i]);
    // }

    numbers.forEach(function (number) {
        console.log(number);
    });
}
logNums(numbers);

/**
 *
 * !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
 *
 **/

// exercise problem solution using forEach
var strings = ['mary', 'had', 'a', 'little', 'lamb'];
function concatStringsForEach(strings) {
    var concatted = ''
    strings.forEach(function (string) {
        concatted = concatted + string;
    })
    return console.log(concatted);
}
concatStringsForEach(strings);

// exercise problem solution done with for loop
var nextSetStrings = ['to', 'be', 'or', 'to', 'be', ', ', 'that', 'is', 'the', 'question.']
function concatStringsForLoop(nextStrings) {
    var bigString = '';
    for (var x = 0; x < nextStrings.length; x++) {
        bigString += nextStrings[x];
    }
    return console.log(bigString);
}
concatStringsForLoop(nextSetStrings);

/**
 *
 * !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!
 *
 **/

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnArrSum(values) {
    var sumAll = 0;
    values.forEach(function (value) {
        sumAll = sumAll + value;
    })
    return console.log(sumAll);
}

returnArrSum(values);

/**
 *
 * !! Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string 'input num in input array' if the second argument is an element in the first argument array otherwise, the function should return the string 'input num NOT in input array' !!
 *
 **/

function checkIfNumInArray(arrayOfNums, checkNum) {
    if (arrayOfNums.indexOf(checkNum) === -1) {
        console.log('input num '+ checkNum + ' NOT in input array')
    } else {
        console.log('input num '+ checkNum + ' in input array')
    }
}

checkIfNumInArray(values, 5);
checkIfNumInArray(values, 2);
checkIfNumInArray(values, 1);
checkIfNumInArray(values, 10);
checkIfNumInArray(values, 11);

function checkInArr(arrayOfVal, numberInThere) {
    arrayOfVal.indexOf(numberInThere) === -1
        ? console.log('input num '+ numberInThere + ' NOT in input array')
        : console.log('input num '+ numberInThere + ' in input array')
}

checkInArr(values, 4);
checkInArr(values, 3);
checkInArr(values, 9);
checkInArr(values, 11);
checkInArr(values, 21);