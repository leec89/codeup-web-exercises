"use strict";

/*
============== BONUS 1


// ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.
//  EXAMPLE...

    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    cleanPhoneNumbers(phoneNumbers);

    the above code should output the following...

       2105552020
       2305552020
       5125553030
*/

var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
function cleanPhoneNumbers(phoneNumbers) {
    var scrubNumbers = phoneNumbers.split('\n');
    for (var x in scrubNumbers) {
        console.log()
    }
}
============== BONUS 2

Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.

    Example input: "aBc12#""
Example output: "AbC12#"


============== BONUS 3

Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".

    Example Input: "geek5"
Example Output: "Yes"

Example Input: "codingchallenge25"

*/
