"use strict";

// 6 Use Cases for Map() in JavaScript
// https://betterprogramming.pub/6-use-cases-for-map-in-javascript-a09f51ea2d2c

// 1. Double the elements of an array
// 2. Reformat objects in an array
// 3. Callback certain elements in an array
// 4. Convert a String to an Array
// 5. Iterate through a NodeList
// 6. Render a List in React.js

// ************************************************

// 1. Double the elements of an array

let initialArray = [1,2,3,4,5]

let doubles = initialArray.map( function(num) {
    return num*2
})

console.log(initialArray); // returns [1,2,3,4,5]
console.log(doubles); // returns [2,4,6,8,10]

// Arrow function

let doubles2 = initialArray.map(x => x * 2);

console.log(initialArray); // returns [1,2,3,4,5]
console.log(doubles2); // returns [2,4,6,8,10]

// ************************************************

// 2. Reformat objects in an array

var lineup = [
    {
        id: 1,
        firstName: "Magic",
        lastName: "Johnson"
    }, {
        id: 2,
        firstName: "Kobe",
        lastName: "Bryant"
    }, {
        id: 3,
        firstName: "Lebron",
        lastName: "James"
    }, {
        id: 4,
        firstName: "Kareem",
        lastName: "Abdul-Jabbar"
    }, {
        id: 5,
        firstName: "Shaquille",
        lastName: "O’Neal"
    }
];

let lineupSpeech = lineup.map( player => {
    let newObj = {};
    newObj["fullName"] = player.firstName + " " + player.lastName;
    return newObj;
})

console.log(lineup);
/*
[
  { id: 1, firstName: 'Magic', lastName: 'Johnson' },
  { id: 2, firstName: 'Kobe', lastName: 'Bryant' },
  { id: 3, firstName: 'Lebron', lastName: 'James' },
  { id: 4, firstName: 'Kareem', lastName: 'Abdul-Jabbar' },
  { id: 5, firstName: 'Shaquille', lastName: 'O’Neal' }
]
*/
console.log(lineupSpeech);
/*
[
  { fullName: 'Magic Johnson' },
  { fullName: 'Kobe Bryant' },
  { fullName: 'Lebron James' },
  { fullName: 'Kareem Abdul-Jabbar' },
  { fullName: 'Shaquille O’Neal' }
]
*/

// ************************************************

// 3. Callback certain elements in an array

const numArray = [1, 2, 3, 4];
const sqrts = numArray.map( (num) => {
    return num % 2 === 1 ? Math.sqrt(num): num
} );

// ************************************************

// 4. Convert a String to an Array
// You can convert a string to an array using map() method. To do that, you can get help from the .call() method.

const language = "JavaScript"
const map = Array.prototype.map
const letters = map.call(language, eachLetter => {
    return `${eachLetter}`
})

console.log(letters) //  ['J','a','v','a','S','c','r','i','p','t']

// ************************************************

// 5. Iterate through a NodeList

/*
You can use map() method to iterate through the objects collected by querySelectorAll(). It is possible since querySelectorAll() returns a NodeList.
 */

let NodeList = document.querySelectorAll(“p”);

let values = Array.prototype.map.call(NodeList, function(obj) {
    return obj.value
})

// 6. Render a List in React.js

import React from ‘react’;
import ReactDOM from ‘react-dom’;

const numbers = [1,2,3,4,5];
const listItems = numbers.map( (number) =>
    <li> {number} </li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);