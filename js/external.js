"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my website!');
let color = prompt('What is your favorite color?')
alert('Great, ' + color + ' is my favorite color too!')

/*
3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

    You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

*/

let totalToPay = 0;
let daysLittleMermaid = Number(prompt('How many days did you rent Little Mermaid?'));
let daysBrotherBear = Number(prompt('How many days did you rent Brother Bear?'));
let daysHercules= Number(prompt('How many days did you rent Hercules?'));
let pricePerDay = Number(prompt('What was the rental price per day?'));
let totalDaysRented = daysLittleMermaid + daysBrotherBear + daysHercules;

totalToPay = totalDaysRented * pricePerDay;

alert('The total number of days of rentals was ' + totalDaysRented + ' so the price to pay is $' + totalToPay);

/*

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

*/

let totalPay = 0;
let rateGoogle = Number(prompt('What\'s your hourly rate working for Google?'));
let rateAmazon = Number(prompt('What\'s your hourly rate working for Amazon?'));
let rateFacebook = Number(prompt('What\'s your hourly rate working for Facebook?'));
let hoursGoogle = Number(prompt('How many hours did you work at Google?'));
let hoursAmazon = Number(prompt('How many hours did you work at Amazon?'));
let hoursFacebook = Number(prompt('How many hours did you work at Facebook?'));
let hoursWorked = hoursGoogle + hoursAmazon + hoursFacebook;

totalPay = (rateGoogle * hoursGoogle) + (rateAmazon * hoursAmazon) + (rateFacebook * hoursFacebook);

alert('The number of hours worked was ' + hoursWorked + ' and you were paid $' + totalPay);

/*

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

*/

let canBeEnrolled = false;
let classIsNotFull = confirm('If the class is not full press OK, otherwise press Cancel');
let noScheduleConflict = confirm('If you don\'t have a schedule conflict, please press OK. If there is a conflict, please Cancel');

if (classIsNotFull && noScheduleConflict) {
    alert('Great! It looks like the class is not full and there are no schedule conflicts. You are enrolled!');
    canBeEnrolled = true;
} else if (!classIsNotFull) {
    alert('Sorry! The class is full so you cannot enroll at this time');
    canBeEnrolled = false;
} else {
    alert('Sorry! There is a schedule conflict so you cannot enroll at this time');
    canBeEnrolled = false;
}


/*

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

*/

let offerApplied = false
let purchasedTwoItems = confirm('If two items were purchased please press OK, otherwise press Cancel');
let offerValid = confirm('If the offer is still valid please press OK, otherwise press Cancel');
let premiumMember = confirm('If you\'re a Premium Member please press OK, otherwise press Cancel');

if (offerValid) {
    if (premiumMember) {
        alert('Welcome Premium Member! Your offer is valid.');
    } else if (purchasedTwoItems) {
        alert('Welcome! Your offer is valid.');
    } else {
        alert('We apologize but your offer is NOT valid.');
    }
} else {
    alert('We apologize but your offer is NOT valid.');
}

/*

4. Use the following code to follow the instructions below:


let username = 'codeup';
let password = 'notastrongpassword';

Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username

the username must be no more than 20 characters
neither the username or password can start or end with whitespace

*/

var validLogin = false;

// Run loop for valid login requirements
while (!validLogin) {

    // Run loop for valid username and check for length requirement
    var validUsername = false;
    while (!validUsername) {
        var username = prompt('What\'s your new username?');
        username = username.trim();
        let userLength = username.length;
        if (userLength <= 20) {
            validUsername = true;
        } else {
            alert('Sorry, your username is too long! It must be less than or equal to 20 characters & numbers.');
        }
    }

    // Run loop for valid username and check for length requirement
    var validPassword = false;
    while (!validPassword) {
        var password = prompt('What\'s your new password?');
        password = password.trim();
        let passLength = password.length;
        if (passLength >= 5) {
            validPassword = true;
        }else {
            alert('Sorry, your password is too short! It must be greater than or equal to 5 characters & numbers.')
        }
    }

    //check to see if username inside of password. if yes, not valid password
    if (password.indexOf(username) !== -1) {
        validPassword = false;
    }

    //all checks done to see if username and password are valid
    if (validUsername && validPassword) {
        validLogin = true;
    } else {
        validLogin = false;
    }

    //if all tests complete and valid then give alert for congrats. otherwise, alert for error and start again.
    if (validLogin) {
        alert('Congratulations! Your username and password are valid.');
    } else {
        alert('Sorry! Your password cannot contain your username.');
    }
}