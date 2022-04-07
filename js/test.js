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

function analyzeColor (inputColor) {
    var redMessage = 'Red is the color of ketchup.';
    var orangeMessage = 'Orange is the color of the Longhorns.';
    var yellowMessage = 'Yellow is the color of the sun.';
    var greenMessage = 'Green is the color of broccoli.';
    var blueMessage = 'Blue is the color of the ocean.';
    var noSaying = 'I don\'t know anything about ';
    var message = '';
    if (colors.indexOf('red')) {
        message = redMessage;
    } else if (colors.indexOf('orange')) {
        message = orangeMessage;
    } else if (colors.indexOf('yellow')) {
        message = yellowMessage;
    } else if (colors.indexOf('green')) {
        message = greenMessage;
    } else if (colors.indexOf('blue')) {
        message = blueMessage;
    } else {
        message = noSaying + ' ' + inputColor
    }
    return alert(message);
}

analyzeColor(randomColor);