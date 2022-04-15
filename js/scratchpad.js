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

function checkIfNumber(checkNum) {
    if (typeof checkNum === 'number') {
        return true;
    } else {
        return false;
    }
}

function checkOddEven(isItOddEven) {
    if (isItOddEven % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

function addHundred(toAdd100) {
    return 100 + toAdd100;
}

function checkNegPos(isItOddPos) {
    if (isItOddPos < 0) {
        return 'negative';
    } else {
        return 'positive';
    }
}

var askForNumber = confirm('Would you like to enter a number?');
if (askForNumber) {
    var promptNumber = parseFloat(prompt('Please enter a number'));
    if (checkIfNumber(promptNumber)) {
        alert('It\'s an ' + checkOddEven(promptNumber) + ' number.');
        alert('Adding 100 to your number gives you ' + addHundred(promptNumber) + '.');
        alert('It\'s a ' + checkNegPos(promptNumber) + ' number.');
    } else {
        alert('Sorry, that\'s not a number!')
    }
}