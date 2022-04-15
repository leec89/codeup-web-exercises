"use strict";

var pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "rhubarb"
];

function lastThreePies(pies) {
    return pies.slice(pies.length-3);
}

console.log(lastThreePies(pies));

var stringTest = 'Test this string'
var stringCopy = stringTest;
stringCopy.toUpperCase();
var test = stringTest.toUpperCase();

console.log(stringTest);
console.log(stringCopy);
console.log(test);