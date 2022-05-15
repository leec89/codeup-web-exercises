"use strict";


/** Thu May 12 - d28w07 ******************************************************************************************/

(function () {
    let button = document.getElementById("changeColor");
    let color = document.querySelector("#color")
    let body = document.querySelector("body")

//
    function colorButton(e) {
        // document.querySelector("body").style.backgroundColor = document.querySelector("#color").value
        body.style.backgroundColor = color.value
    }

    button.addEventListener('click', colorButton)
// document.getElementById("changeColor").addEventListener('click', colorButton)
})();

/** Fri May 13 - d29w07 ******************************************************************************************/

(function () {
    let para = document.getElementById("doubleSize");
    let fontSizeParsed = parseFloat(window.getComputedStyle(document.getElementById("doubleSize")).fontSize);

    function logSize(e) {
        return para.style.fontSize = fontSizeParsed * 2 + 'px'
    }

    para.addEventListener('dblclick', logSize);
})();

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

(function () {
    let button2 = document.getElementById("addTodo");
    let todoInput = document.querySelector("#todo")
    let ulList = document.querySelector("#todosList")

//
    function colorButton2(e) {
        ulList.innerHTML = '<li>todoInput.value</li>'
    }

    button2.addEventListener('click', colorButton2)
})();


// DOM Practice Question #3

// Part 1:
// Every 1 seconds take the H1 tags and change the font size to 10px.
// If its already 10px set it to 20px;

// Part 2:
// Add a toggle button with id of "toggleH1"
// use that button to stop and restart the h1 tags from changing size.


// let button3 = document.getElementById("toggleH1");
// let allOfThem = document.getElementsByTagName('h1');
//
// function logSize2(e) {
//     for (let i = 0; i < allOfThem.length; i++) {
//         allOfThem[i].style.fontSize = 40 + 'px'
//     }
//
// }

(function () {
var button3 = document.getElementById("toggleH1");
console.log(button3)
function myFunction() {
    var fontSizeParsed = parseInt(window.getComputedStyle(button3).fontSize) + 5;
    console.log(fontSizeParsed)

    var allOfThem = document.getElementsByTagName('h1');
    for (let i = 0; i < allOfThem.length; i++) {
        if (parseFloat(allOfThem[i].style.fontSize) === fontSizeParsed) {
            allOfThem[i].style.fontSize = fontSizeParsed + 40 + 'px';
        } else {
            allOfThem[i].style.fontSize = fontSizeParsed + 'px';
        }
    }
}

button3.addEventListener('click', myFunction);
})();
// DOM Question #4

// When the mouse enters the content area of the 4th div with the class of "question", an alert should pop up
// that reads "CONGRATULATIONS ON YOUR NEW CRUISE!";

(function () {
    var h1Tags = document.querySelector('.question');
    console.log(h1Tags)
    function myFunction() {
        alert('CONGRATULATIONS ON YOUR NEW CRUISE!')
    }
    h1Tags.addEventListener('mouseover', myFunction);
})();

// DOM Question# #5

// When a user clicks a button labeled "Google" the user should be redirected to the "https://google.com"


// DOM Question #6

// When the user types something into an input element, the value should be concatenated
// onto the paragraph with the ID of "madLib" once the submit button has been clicked.


