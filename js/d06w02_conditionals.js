"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

function analyzeColor (inputColor) {
    console.log(inputColor);
    var redMessage = 'Red is the color of ketchup.';
    var orangeMessage = 'Orange is the color of the Longhorns.';
    var yellowMessage = 'Yellow is the color of the sun.';
    var greenMessage = 'Green is the color of broccoli.';
    var blueMessage = 'Blue is the color of the ocean.';
    var noSaying = 'I don\'t know anything about ';
    var message = '';
    if (inputColor === 'red') {
        message = redMessage;
    } else if (inputColor === 'orange') {
        message = orangeMessage;
    } else if (inputColor === 'yellow') {
        message = yellowMessage;
    } else if (inputColor === 'green') {
        message = greenMessage;
    } else if (inputColor === 'blue') {
        message = blueMessage;
    } else {
        message = noSaying + inputColor + '!';
    }
    return alert(message);
}

analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColorWithCase (inputColor) {
    console.log(inputColor);
    switch (inputColor) {
        case "red":
            alert('Red is the color of ketchup.')
            break;
        case "orange":
            alert('Orange is the color of Texas Longhorns.')
            break;
        case "yellow":
            alert('Yellow is the color of the sun.')
            break;
        case "green":
            alert('Green is the color of grass.')
            break;
        case "blue":
            alert('Blue is the color of the ocean.')
            break;
        default:
            alert("I don\'t know anything about " + inputColor + '!');
    }
    return;
}

analyzeColorWithCase(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColorWithPrompt (inputColorPrompt) {
    console.log(inputColorPrompt);
    switch (inputColorPrompt) {
        case "red":
            alert('Red is the color of ketchup.')
            break;
        case "orange":
            alert('Orange is the color of Texas Longhorns.')
            break;
        case "yellow":
            alert('Yellow is the color of the sun.')
            break;
        case "green":
            alert('Green is the color of grass.')
            break;
        case "blue":
            alert('Blue is the color of the ocean.')
            break;
        default:
            alert("I don\'t know anything about " + inputColorPrompt + '!');
    }
    return;
}

var inputColorPrompt = prompt('What is your favorite color?');
analyzeColorWithPrompt(inputColorPrompt);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var randomWalmartLuckyNum = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum, totalBeforeDisc) {
    switch (luckyNum) {
        case 1:
            let disc10 = totalBeforeDisc * .1;
            let amountToPay10 = totalBeforeDisc - disc10;
            alert('You get a 10% discount of $' + disc10 + ' so instead of paying $' + totalBeforeDisc + ' you only have to pay $' + amountToPay10 + '!');
            break;
        case 2:
            let disc25 = totalBeforeDisc * .25;
            let amountToPay25 = totalBeforeDisc - disc25;
            alert('You get a 25% discount of $' + disc25 + ' so instead of paying $' + totalBeforeDisc + ' you only have to pay $' + amountToPay25 + '!');
            break;
        case 3:
            let disc35 = totalBeforeDisc * .35;
            let amountToPay35 = totalBeforeDisc - disc35;
            alert('You get a 35% discount of $' + disc35 + ' so instead of paying $' + totalBeforeDisc + ' you only have to pay $' + amountToPay35 + '!');
            break;
        case 4:
            let disc50 = totalBeforeDisc * .5;
            let amountToPay50 = totalBeforeDisc - disc50;
            alert('You get a 50% discount of $' + disc50 + ' so instead of paying $' + totalBeforeDisc + ' you only have to pay $' + amountToPay50 + '!');
            break;
        case 5:
            let disc100 = totalBeforeDisc;
            alert('You get a 100% discount of $' + disc100 + ' so instead of paying $' + totalBeforeDisc + ' you pay nothing!');
            break;
        default:
            alert('Sorry! You drew an unlucky number. No discount this time. Try again next time.');
    }
}

var subTotalAmount = prompt('What was the amount at checkout?');
calculateTotal(randomWalmartLuckyNum, subTotalAmount);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * If you see the above solution, I did this. I guess I should have read ahead.
 */

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function checkIfNaN(checkForNaN) {
    return isNaN(checkForNaN);
}

function checkOddEven(isItOddEven) {
    return (isItOddEven % 2 === 0) ? 'even' : 'odd';
}

function addHundred(toAdd100) {
    return 100 + toAdd100;
}

function checkNegPos(isItOddPos) {
    return (isItOddPos < 0) ? 'negative' : 'positive';
}

var askForNumber = confirm('Would you like to enter a number?');
if (askForNumber) {
    var promptNumber = Number(prompt('Please enter a number'));
    if (checkIfNaN(promptNumber)) {
        alert('Sorry, that\'s not a number!')
    } else {
        alert('It\'s an ' + checkOddEven(promptNumber) + ' number.');
        alert('Adding 100 to your number gives you ' + addHundred(promptNumber) + '.');
        alert('It\'s a ' + checkNegPos(promptNumber) + ' number.');
    }
}