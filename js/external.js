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
        if (offerValid) {
            alert('Welcome Premium Member! Your offer is valid.');
        } else if (purchasedTwoItems) {
            alert('Welcome! Your offer is valid.');
        }
    }
} else {
        alert('We apologize but your offer is NOT valid.');
    }