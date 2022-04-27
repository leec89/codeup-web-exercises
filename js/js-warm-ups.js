"use strict";

/**
 *
 * Create a file called js-warm-ups.html and add script tags to write JavaScript code.
 *
 * Write a function, returnFirstAndLast, that takes in an array of values and returns an array of just the first and last elements. Assume the input array contains at least two elements. The function should not mutate the input array.
 *
 * Examples...
 *
 * returnFirstAndLast([1, 2, 3, 4]) // returns [1, 4]
 * returnFirstAndLast(['hello', 'bob', 7, null, 'world']) // returns ['hello', 'world']
 * returnFirstAndLast(['hello', 'world']) // returns ['hello', 'world']
 *
 *
 * Write a function, returnEveryOtherElement, that takes in an array of inputs and returns an array of every other input, starting with the first. Assume the array will contain at least three elements. The function should not mutate the input array.
 *
 * Examples...
 *
 * returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]
 * returnEveryOtherElement([1, 2, 3]) // returns [1, 3]
 * returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']
 * returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]
 */

/*
function returnFirstAndLast (inputArr) {
    return [inputArr[0], inputArr[inputArr.length - 1]]
}

console.log(returnFirstAndLast([1, 2, 3, 4])) // returns [1, 4]
console.log(returnFirstAndLast(['hello', 'bob', 7, null, 'world'])) // returns ['hello', 'world']
console.log(returnFirstAndLast(['hello', 'world'])) // returns ['hello', 'world']

function returnEveryOtherElement (inputArr) {
    var newArr = [];
    for (var i = 0; i < inputArr.length; i += 2) {
        newArr.push(inputArr[i])
    }
    return newArr;
}

console.log(returnEveryOtherElement([1, 2, 3, 4, 5])) // returns [1, 3, 5]
console.log(returnEveryOtherElement([1, 2, 3])) // returns [1, 3]
console.log(returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred'])) // returns ['bob', 'cathy']
console.log(returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // returns [10, 8, 6, 4, 2]
*/

/*
var trails = [
    {
        name: "Salado Creek Greenway",
        distanceInMiles: 20,
        isPaved: true
    },
    {
        name: "Leon Creek Greenway",
        distanceInMiles: 20.1,
        isPaved: true
    },
    {
        name: "McAllister Park: Blue Loop",
        distanceInMiles: 6.3,
        isPaved: false
    },
    {
        name: "Phil Hardberger Park: Geology Trail",
        distanceInMiles: 0.8,
        isPaved: false
    }
]

function trailDistance (inputObj) {
    var totalMiles = 0;
    inputObj.forEach(function(trail) {
        if (!trail.isPaved) {
            totalMiles += trail.distanceInMiles;
        }
    })
    return totalMiles;
}

console.log('Distance on non-paved trails is',trailDistance(trails),'miles.');

// d17w05, Tue Apr 26 warmup

function returnAlpha (inputStr) {
    var strIntoArray = inputStr.split('');
    var sorted = strIntoArray.sort();
    return sorted.join('');
}
console.log('\'webmaster\' alphabetized is: ',returnAlpha('webmaster')) //'abeemrstw'
console.log('\'developer\' alphabetized is: ',returnAlpha('developer')) //'deeeloprv'
*/

// d18w05, Wed Apr 27 warmup

/*
================================= WARM UP

Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:
{
  lowest: LOWEST_NUMBER_HERE,
  highest: HIGHEST_NUMBER_HERE
}
Assume both inputs are number data types. The first argument may or may not be higher than the second argument. If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.

EXAMPLES...

createNumObject(1, 3) // returns...
  {
    lowest: 1,
    highest: 3
  }
createNumObject(10, 5) // returns...
  {
    lowest: 5,
    highest: 10
  }
createNumObject(7, 7) // returns...
  {
    lowest: 7,
    highest: 7
  }
*/

function createNumObject (num1, num2) {
    return num1 >= num2
        ? {lowest: num2, highest: num1}
        : {lowest: num1, highest: num2}
}

console.log(createNumObject(7, 7));
console.log(createNumObject(1, 3))
console.log(createNumObject(10, 5))