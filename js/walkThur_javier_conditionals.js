"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    // function analyzeColor(color){
    //    if (color === 'red'){
    //        return "Roses are red";
    //    } else if (color === 'orange') {
    //        return "Orange is pumpkins and prison clothes";
    //    } else if (color === 'yellow') {
    //        return "Our sun is a yellow star";
    //    } else if (color === 'green') {
    //        return "Plant life is green";
    //    } else if (color === 'blue') {
    //        return "The sky is blue";
    //    } else if (color === 'indigo') {
    //        return "Is indigo even a real rainbow color?";
    //    } else if (color === 'violet') {
    //        return "Who ever said violets are blue?";
    //    } else {
    //        return "I don't even know that color";
    //    }
    // }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(color){
//     switch (color) {
//         case 'red':
//             return "Roses are red";
//         case 'orange':
//             return "Orange is pumpkins and prison clothes";
//         case 'yellow':
//             return "Our sun is a yellow star";
//         case 'green':
//             return "Plant life is green";
//         case 'blue':
//             return "The sky is blue";
//         case 'indigo':
//             return "Is indigo even a real rainbow color?";
//         case 'violet':
//             return "Who ever said violets are blue?";
//         default:
//             return "I don't even know that color";
//     }
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Please enter a color");
// console.log(analyzeColor(userColor.toLowerCase()));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
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

function calculateTotal(luckyNumber, total){
    if (luckyNumber === 0) {
        return total;
    } else if (luckyNumber === 1){
        return total * .9;
    } else if (luckyNumber === 2) {
        return total * .75;
    } else if (luckyNumber === 3) {
        return total * .65;
    } else if (luckyNumber === 4) {
        return total * .5;
    } else if (luckyNumber === 5) {
        return 0;
    }
}
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userBill = prompt("Please enter your total bill");
// alert("Your lucky number was " + luckyNumber + "\n" +
//       "Your price before discount was $" + userBill + "\n" +
//       "Your price after discount is $" + (calculateTotal(luckyNumber, userBill)));
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
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// first write the basic code

// var wantToEnterNumber = confirm("Do you want to enter a number?");
// if (wantToEnterNumber){
//   var userNumber = prompt("Enter a number");
// }

// var oddOrEven;
// if (userNumber%2===0){
//    oddOrEven = userNumber + " is even.";
// } else {
//    oddOrEven = userNumber + " is odd";
// }

// alert(oddOrEven);

// var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

// alert(numberPlus100);

// var negativeOrPositive;
// if (userNumber < 0) {
//    negativeOrPositive = "That is a negative number.";
// } else {
//    negativeOrPositive = "That is a positive number.";
// }
// alert(negativeOrPositive);

// then refactor so if what the user enters is not a number, there's an alert
// and the info is not displayed

// var wantToEnterNumber = confirm("Do you want to enter a number?");
// if (wantToEnterNumber){
//   var userNumber = prompt("Enter a number");
//   if (isNaN(userNumber)){
//    alert("That is not a number!");
//   } else {
//     var oddOrEven;
//     if (userNumber%2===0){
//        oddOrEven = userNumber + " is even.";
//     } else {
//        oddOrEven = userNumber + " is odd";
//     }

//     alert(oddOrEven);

//     var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

//     alert(numberPlus100);

//     var negativeOrPositive;
//     if (userNumber < 0) {
//        negativeOrPositive = "That is a negative number.";
//     } else {
//        negativeOrPositive = "That is a positive number.";
//     }
//     alert(negativeOrPositive);
//       }
//     }


// then refactor to use functions

// function getNumber() {
//    var wantToEnterNumber = confirm("Do you want to enter a number?");
//    if (wantToEnterNumber){
//        var userNumber = prompt("Enter a number!");
//        if (isNaN(userNumber)){
//            alert("That is not a number!");
//            return NaN;
//           } else {
//            userNumber = parseInt(userNumber);
//            return userNumber;
//           }
//    }
// }

// function oddOrEven(number){
//    number = parseInt(number);
//    if (number%2==0){
//        return number + " is even.";
//    } else {
//        return number + " is odd."
//    }
// }

// function numberPlus100(number){
//    number = parseInt(number);
//    return number + " plus 100 equals " + number + 100 + ".";
// }


// function negativeOrPositive(number){
//    number = parseInt(number);
//    if (number < 0) {
//        return number + " is a negative number.";
//     } else {
//        return number + " is a positive number.";
//     }
// }

// refactor a second time to avoid use of redundant code
// we could also add comments to each of these functions
// reminding us that you should always parse the numbers
// before using the functions

function parseIt(number){
    return parseInt(number);
}

// function oddOrEven(number){
//     if (number%2==0){
//         return number + " is even.";
//     } else {
//         return number + " is odd."
//     }
//  }

// function numberPlus100(number){
//    var mySum = number + 100;
//    return number + " plus 100 equals " + mySum + ".";
// }


// function negativeOrPositive(number){
//    if (number < 0) {
//        return number + " is a negative number.";
//     } else {
//        return = number + " is a positive number.";
//     }
// }

// now let's sleek it down a little

//
// function oddOrEven(number){
//     return (number%2===0) ? number + " is even." : number + " is odd.";
//  }
//
//  function negativeOrPositive(number){
//     return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
//  }


// note it has to be !isNaN because NaN is never equal to NaN
// var maybeANumber = getNumber();
// if (!isNaN(maybeANumber)) {
//     alert(oddOrEven(maybeANumber));
//     alert(numberPlus100(maybeANumber));
//     alert(negativeOrPositive(maybeANumber));
// }


// Let's try to take it a step further

function oddOrEven(number){
    return (number%2===0) ? number + " is even." : number + " is odd.";
}

function numberPlus100(number){
    var mySum = number + 100;
    return number + " plus 100 equals " + mySum + ".";
}

function negativeOrPositive(number){
    return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
}

function getNumber() {
    if (confirm("Do you want to enter a number?")){
        return returnNaNOrNumber(prompt("Enter a number!"));
    }
}

function returnNaNOrNumber(input){
    if (isNaN(input)){
        alert("That is not a number!");
        return NaN;
    } else {
        return parseInt(input);
    }
}

function analyzeNumber(input){
    if (!isNaN(input)){
        alert(oddOrEven(input));
        alert(numberPlus100(input));
        alert(negativeOrPositive(input));
    }
}

analyzeNumber(getNumber());