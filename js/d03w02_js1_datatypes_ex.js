/*

2. Execute the following statement in the Chrome JavaScript console and then follow the directions below.


var sample = "Hello Codeup";
Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().



let sample = "Hello Codeup"

//Use .length to find the number of characters in the string.
let sampleLength = sample.length
console.log('sample length is:', sampleLength)

//Try to make the sample string all upper or all lower case.
let sampleUpper = sample.toUpperCase()
let sampleLower = sample.toLowerCase()
console.log('sample Uppercase is:', sampleUpper)
console.log('sample Lowercase is:', sampleLower)

//Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample = sample + ' Students'
console.log('updated sample is:', sample)

//Replace "Students" with "Class".
sample = sample.replace('Students', 'Class')
console.log('updated sample is:', sample)

//Find the index of "c" using .indexOf(). What do you observe?
// -not found due to case-sensitive

//Find the index of "C" using .indexOf().
let indexFindC = sample.indexOf('C')
console.log('index of \'C\' in sample is:', indexFindC)

//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let indexCodeup = sample.substring(6,12)
console.log('substring of \'Codeup\' in sample is:', indexCodeup)




3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.




You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

*/

let totalToPay = 0
let daysLittleMermaid = 3
let daysBrotherBear = 5
let daysHercules= 1
let pricePerDay = 3

totalToPay = (daysLittleMermaid + daysBrotherBear + daysHercules) * pricePerDay

console.log(totalToPay)


/*

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

*/

let totalPay = 0
let rateGoogle = 400
let rateAmazon = 380
let rateFacebook = 350
let hoursGoogle = 6
let hoursAmazon = 4
let hoursFacebook = 10

totalPay = (rateGoogle * hoursGoogle) + (rateAmazon * hoursAmazon) + (rateFacebook * hoursFacebook)

console.log(totalPay)


/*

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

*/

let canBeEnrolled = false
let classIsNotFull = true
let noScheduleConflict = true

if (classIsNotFull && noScheduleConflict) {
    canBeEnrolled = true
}

console.log(canBeEnrolled)


/*

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

*/

let offerApplied = false
let purchasedTwoItems = true
let offerNotExpired = true
let premiumMember = true

if (premiumMember && offerNotExpired) {
    offerApplied = true
} else if (purchasedTwoItems && offerNotExpired) {
    offerApplied = true
}

console.log(offerApplied)


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

let username = 'codeup'
let password = 'notastrongpassword'

let validUsername = false
let validPassword = false
let validLogin = false

// remove white space front and back for both username and password
username = username.trim()
password = password.trim()

//after trim, find length of username and password
let userLength = username.length
let passwordLength = password.length

//check if username length >= 5 chars and password length <= than 20
if (userLength+1 <= 20 && passwordLength+1 >= 5) {
    validUsername = true
    validPassword = true
}

/* Old solution prior to demo'ing
//check to see if username inside of password. if yes, not valid password
let frontUserIndex = 0
let backUserIndex = userLength-1

while (backUserIndex < passwordLength) {
    let checkUserInPass = password.substring(frontUserIndex,frontUserIndex+userLength)
    if (checkUserInPass === username) {
        validPassword = false
        break
    }
    console.log(frontUserIndex, checkUserInPass)
    frontUserIndex++
    backUserIndex++
}
*/

//check to see if username inside of password. if yes, not valid password
if (password.indexOf(username) !== -1) {
    validPassword = false
}

//all checks done to see if username and password are valid
if (validUsername && validPassword) {
    validLogin = true
}

console.log('Username and password validity: ', validLogin)