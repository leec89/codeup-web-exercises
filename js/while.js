"use strict";

/**
 *
 * Create a while loop that uses console.log() to create the output shown below.
 *
 *
 * 2
 * 4
 * 8
 * 16
 * 32
 * 64
 * 128
 * 256
 * 512
 * 1024
 * 2048
 * 4096
 * 8192
 * 16384
 * 32768
 * 65536
 *
 */

console.log('') // break in console.log
console.log('Power of 2 list')

console.log('First solution with two variables')
var count = 1;
var total = 2
console.log(total);
while (count < 16) {
    console.log(total += total);
    count++
}

console.log('Second solution with one variable')
var total2 = 2;
while (total2 <= 65536) {
    console.log(total2)
    total2 = total2*2
}

console.log('Third solution with exponent')
var expo = 1;
var total3 = 2;
while (total3 < 65536) {
    total3 = 2**expo
    console.log(total3)
    expo++
}
/**
 *
 * Do While Loop
 * An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
 *
 *
 * // This is how you get a random number between 50 and 100
 * var allCones = Math.floor(Math.random() * 50) + 50;
 * // This expression will generate a random number between 1 and 5
 * Math.floor(Math.random() * 5) + 1;
 * The output should be similar to the following:
 *
 * 5 cones sold...  // if there are enough cones
 * Cannot sell you 6 cones I only have 3...  // If there are not enough cones
 * Yay! I sold them all! // If there are no more cones
 *
 */

var allCones = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
var number = 0;
console.log('number of cones is ' + allCones);

do {
    var randomToFive = Math.floor(Math.random() * 5) + 1;
    if (allCones >= randomToFive) {
        allCones = allCones - randomToFive;
        console.log('number cones sold is ' + randomToFive + ' and remaining cones is ' + allCones);
    } else {
        console.log('Cannot sell you ' + randomToFive + ' cones I only have ' + allCones + '...')
        break;
    }
    if (allCones === 0) {
        console.log('Yay! I sold them all!');
    }

} while (allCones > 0);