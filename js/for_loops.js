"use strict";

/**
 *
 * Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
 *
 */

function showMultiplicationTable(inputForMultTable) {
    var testForNumber = Number(inputForMultTable);
    var isInt = isNaN(testForNumber);
    if (isInt) {
        return console.log('Sorry, ' + inputForMultTable + ' not a number!');
    } else {
        for (var x = 1; x <= 10; x++) {
            console.log(inputForMultTable + ' * ' + x + " = " + (inputForMultTable * x))
        }
    }
}

console.log('Multiplication Tables with prompt')
var toMakeMultiplyTable = prompt('Please enter a number to get multiplication tables')
showMultiplicationTable(toMakeMultiplyTable);

/**
 *
 * Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
 *
 */

console.log('') // break in console.log
console.log('Generate 10 random numbers - check if even or odd')
var random20to200 = 0;

for (var x = 1; x <= 10; x++) {
    random20to200 = Math.floor(Math.random() * (220 - 20 + 1)) + 20;
    if (random20to200 % 2 === 0) {
        console.log('The random number generated is ' + random20to200 + ' and the number is even!');
    } else {

        console.log('The random number generated is ' + random20to200 + ' and the number is odd!');
    }
}

/**
 *
 * Create a for loop that uses console.log to create the output shown below.
 *
 *
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * 666666
 * 7777777
 * 88888888
 * 999999999
 *
 */

console.log('') // break in console.log
console.log('Number tree')

// First solution - nested for loops
console.log('First solution - nested for loops');
for (let x = 1; x <=9; x++) {
    let blankStr = ' ';
    for (let y = 1; y <= x; y++) {
        blankStr = blankStr + x;
    }
    console.log(blankStr)
}

// Second solution - outer for loop, inner while loop
console.log('Second solution - outer for loop, inner while loop')
for (let x = 1; x <=9; x++) {
    let outputStr = ' ';
    let y = x;
    while (y > 0) {
        outputStr = outputStr + x;
        y--;
    }
    console.log(outputStr);
}

/**
 *
 * Create a for loop that uses console.log to create the output shown below.
 *
 *
 * 100
 * 95
 * 90
 * 85
 * 80
 * 75
 * 70
 * 65
 * 60
 * 55
 * 50
 * 45
 * 40
 * 35
 * 30
 * 25
 * 20
 * 15
 * 10
 * 5
 *
 */

console.log('') // break in console.log
console.log('Countdown from 100 by 5')

for (var x = 100; x > 0; x -= 5) {
    console.log(x)
}