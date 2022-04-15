"use strict";

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


var phoneNums = '210-555-2020\n230-555-2020\n512-555-3030';
function cleanPhoneNumbers(phoneNumbers) {
    var scrubNumbers = phoneNumbers.split('\n');
    for (var x in scrubNumbers) {
        console.log(scrubNumbers[x]);
    }
}
cleanPhoneNumbers(phoneNums);

function cleanPhoneNumsForEach (arrPhoneNums) {
    var scrubbedNums = arrPhoneNums.split('\n');
    scrubbedNums.forEach(function (phoneNum) {
        console.log(phoneNum);
    })
}
cleanPhoneNumsForEach(phoneNums);

function logInput (inputToLog) {
    console.log(inputToLog);
}

numbers.forEach(function (number, index, array) {
    logInput(number + ' is at index ' + index + ' in array ' + array);
});

numbers.forEach(logInput);
