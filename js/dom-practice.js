"use strict";


/** Thu May 12 - d28w07 ******************************************************************************************/
var button = document.getElementById("changeColor");
var color = document.querySelector("#color")
var body = document.querySelector("body")
//
function colorButton(e) {
    // document.querySelector("body").style.backgroundColor = document.querySelector("#color").value
    body.style.backgroundColor = color.value
}
button.addEventListener('click', colorButton)
// document.getElementById("changeColor").addEventListener('click', colorButton)

/** Fri May 13 - d29w07 ******************************************************************************************/

var para = document.getElementById("doubleSize");
var fontSizeParsed = parseFloat(window.getComputedStyle(document.getElementById("doubleSize")).fontSize);

function logSize(e) {
    return para.style.fontSize = fontSizeParsed * 2 + 'px'
}

para.addEventListener('dblclick', logSize);

/** Fri May 13 - d29w07 *******DOM Practice Question #2**********************************************************/

// 1. Create a button with the id of addTodo. Create an input of type text with the id of "todo"
// 2. Create an unordered list with the id="todosList"
// 4. When the add button is clicked:
//       a. Make it such that the value from the input is added to a list items.
//          example: <li>input</li> inside of <ul>
//       b. Reset the value in the addTodos input.
// 5. If the value for the input is empty. Prevent it from creating another <li> element


/**
 *
 * <input id="color" type="text" placeholder="Enter color"/>           <!--var color = document.querySelector("#color")-->
 * <button type="button" id="changeColor">Change the color!</button>   <!--var button = document.getElementById("changeColor")-->
 *
 * var button = document.getElementById("changeColor");
 * var color = document.querySelector("#color")
 * var body = document.querySelector("body")
 *
 * function colorButton(e) {
 *     body.style.backgroundColor = color.value
 * }
 * button.addEventListener('click', colorButton)
 *
 *     <input type="text" id="todo">
 *     <button type="button" id="addTodo">Add Todo</button>
 *     <ul id="todosList">
 *     </ul>
 *
 */

var button2 = document.getElementById("addTodo");
var todoInput = document.querySelector("#todo")
var ulList = document.querySelector("#todosList")
//
function colorButton2(e) {
    ulList.innerHTML = '<li>todoInput.value</li>'
}
button2.addEventListener('click', colorButton2)



// DOM Practice Question #3

// Part 1:
// Every 1 seconds take the H1 tags and change the font size to 10px.
// If its already 10px set it to 20px;

// Part 2:
// Add a toggle button with id of "toggleH1"
// use that button to stop and restart the h1 tags from changing size.


var button3 = document.getElementById("toggleH1");
var h1All = document.querySelectorAll('h1')

function logSize2(e) {
    return h1All.style.fontSize = '40px'
}

button3.addEventListener('click', logSize2);


// DOM Question #4

// When the mouse enters the content area of the 4th div with the class of "question", an alert should pop up
// that reads "CONGRATULATIONS ON YOUR NEW CRUISE!";



// DOM Question# #5

// When a user clicks a button labeled "Google" the user should be redirected to the "https://google.com"


// DOM Question #6

// When the user types something into an input element, the value should be concatenated
// onto the paragraph with the ID of "madLib" once the submit button has been clicked.


