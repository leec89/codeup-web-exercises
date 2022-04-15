"use strict";

/**
 *
 * Break and Continue
 * Create a file named d09w03_break_and_continue.js in the js directory.
 * Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 * Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 * Your output should look like this:
 *
 *
 * Number to skip is: 27
 *
 * Here is an odd number: 1
 * Here is an odd number: 3
 * Here is an odd number: 5
 * Here is an odd number: 7
 * Here is an odd number: 9
 * Here is an odd number: 11
 * Here is an odd number: 13
 * Here is an odd number: 15
 * Here is an odd number: 17
 * Here is an odd number: 19
 * Here is an odd number: 21
 * Here is an odd number: 23
 * Here is an odd number: 25
 * Yikes! Skipping number: 27
 * Here is an odd number: 29
 * Here is an odd number: 31
 * Here is an odd number: 33
 * Here is an odd number: 35
 * Here is an odd number: 37
 * Here is an odd number: 39
 * Here is an odd number: 41
 * Here is an odd number: 43
 * Here is an odd number: 45
 * Here is an odd number: 47
 * Here is an odd number: 49
 *
 */

console.log('') // break in console.log

// use a boolean condition to check for odd
console.log('Use a boolean condition to check for odd')
var askOddValid = false
while (askOddValid === false) {
    var askOdd = parseInt(prompt('Please enter an odd number between 1 and 50.'));
    if (askOdd % 2 !== 0) {
        askOddValid = true;
    }
}
console.log('Number to skip ' + askOdd);
for (var x = 1; x < 50; x += 2) {
    if (x === askOdd) {
        console.log('Yikes, skipping number ' + x);
        continue;
    } else {
        console.log('Here is an odd number: ' + x);
    }
}

console.log('') // break in console.log

// used a break in the while loop
console.log('used a break in the while loop')
var askOddValid2 = false
while (askOddValid2 === false) {
    var askOdd2 = parseInt(prompt('Please enter an odd number between 1 and 50.'));
    if (askOdd2 % 2 !== 0) {
        break;
    }
}

console.log('Number to skip ' + askOdd2);
for (var x = 1; x < 50; x += 2) {
    if (x === askOdd2) {
        console.log('Yikes, skipping number ' + x);
        continue;
    } else {
        console.log('Here is an odd number: ' + x);
    }
}