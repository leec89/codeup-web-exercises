"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(greeting) {
    return alert('Hello, ' + greeting + '!')
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var name = 'Chris';
var helloMessage = sayHello(name);
console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Oooops - see above

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(checkIfTwo) {
    var isItTwo = false;
    if (checkIfTwo === 2) {
        isItTwo = true;
    }
    return isItTwo;
}

console.log(random, isTwo(random))

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, billTotal) {
    var tipAmount = 0;
    tipAmount = billTotal * tipPercent;
    return Number(tipAmount);
}

// var show1 = calculateTip(0.20, 20) // returns 4
// var show2 = calculateTip(0.25, 25.50) // returns 6.375
// var show3 = calculateTip(0.15, 33.42) // returns 5.013
//
// console.log(show1);
// console.log(show2);
// console.log(show3);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function askingToCalculateTip() {
    var billSubTotal = parseFloat(prompt('How much was your bill? (without the $ symbol please)'));
    var percentToTip = parseFloat(prompt('What percentage would you like to tip? (in decimal please)'));
    var tipAmountReturned = parseFloat(calculateTip(billSubTotal, percentToTip)).toFixed(2);
    var billWithTip = parseFloat(billSubTotal) + parseFloat(tipAmountReturned);
    console.log(billWithTip);
    alert('The tip amount is $' + tipAmountReturned + ' and the total amount of your bill is $' + billWithTip);
    return;
}

askingToCalculateTip();

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function calculateDiscount(discountPercent, priceBeforeDiscount) {
    var discountAmount = 0;
    discountAmount = discountPercent * priceBeforeDiscount;
    return parseFloat (discountAmount);
}

function applyDiscount() {
    var priceSubTotal = Number(prompt('What is the price? (without the $ symbol please)')).toFixed(2);
    var percentDiscount = Number(prompt('What is the discount? (in decimal please)')).toFixed(2);
    var calculatedDiscount = Number(calculateDiscount(priceSubTotal, percentDiscount).toFixed(2));
    var priceWithDiscount = priceSubTotal - calculatedDiscount;
    alert('The discount amount is $' + calculatedDiscount + ' so your price with discount is $' + priceWithDiscount);
    return;
}

applyDiscount();