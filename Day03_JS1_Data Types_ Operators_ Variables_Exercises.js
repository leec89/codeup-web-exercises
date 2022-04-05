/*

3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

*/

/*

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

*/

var total = 0
var daysLittleMermaid = 3
var daysBrotherBear = 5
var daysHercules= 1
var pricePerDay = 3

total = (daysLittleMermaid + daysBrotherBear + daysHercules) * pricePerDay

console.log(total)


/*

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

*/

var totalPay = 0
var rateGoogle = 400
var rateAmazon = 380
var rateFacebook = 350
var hoursGoogle = 6
var hoursAmazon = 4
var hoursFacebook = 10

totalPay = (rateGoogle * hoursGoogle) + (rateAmazon * hoursAmazon) + (rateFacebook + hoursFacebook)

console.log(totalPay)


/*

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

*/

var canBeEnrolled = false
var classIsNotFull = true
var noScheduleConflict = true

if (classIsNotFull && noScheduleConflict) {
    canBeEnrolled = true
}

console.log(canBeEnrolled)


/*

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

*/

var offerApplied = false
var purchasedTwoItems = true
var offerNotExpired = true
var premiumMember = true

if (premiumMember && offerNotExpired) {
    offerApplied = true
} else if (purchasedTwoItems && offerNotExpired) {
    offerApplied = true
}

console.log(offerApplied)


/*

4. Use the following code to follow the instructions below:


var username = 'codeup';
var password = 'notastrongpassword';

Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace

*/

var validUsername = false
var validPassword = false
var pw5Char = true
var pwNotUsername = true
var userNoMoreThan20 = true
var userWhiteStart = false
var userWhiteEnd = false
var passWhiteStart = false
var passWhiteEnd = false
var containsWhiteSpace = true

