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


    /** Fri May 13 - d29w07 ******************************************************************************************/


    let para = document.getElementById("doubleSize");
    let fontSizeParsed = parseFloat(window.getComputedStyle(document.getElementById("doubleSize")).fontSize);

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


    let todoButton = document.getElementById("addTodo");
    let todoInput = document.querySelector("#todo")
    let todoList = document.querySelector("#todosList")

//
    function listItems() {
        if (todoInput.value === '') return
        todoList.innerHTML += '<li>' + todoInput.value + '</li>'
        todoInput.value = ''
    }

    todoButton.addEventListener('click', listItems)


// DOM Practice Question #3

// Part 1:
// Every 1 seconds take the H1 tags and change the font size to 10px.
// If its already 10px set it to 20px;

// Part 2:
// Add a toggle button with id of "toggleH1"
// use that button to stop and restart the h1 tags from changing size.


    function intervalFunction() {
        var h1Tags = document.getElementsByTagName('h1');
        for (var i = 0; h1Tags.length; i++) {
            var currentFontSize = h1Tags[1].style.fontSize
            if (h1Tags[i].style.fontSize === "10px") {
                h1Tags[i].style.fontSize = "20px";
            } else {
                h1Tags[i].style.fontSize = "10px";
            }
        }
    }

    var interval;
    var isOn = false;

    // var interval = setInterval(intervalFunction, 1000);
    var toggleH1s = document.querySelector('#toggleH1');

    toggleH1s.addEventListener('click', function () {
        isOn = !isOn;
        if (isOn) {
            interval = setInterval(intervalFunction, 1000);
        } else {
            clearInterval(interval)
        }

    })


// let button3 = document.getElementById("toggleH1");
// let allOfThem = document.getElementsByTagName('h1');
//
// function logSize2(e) {
//     for (let i = 0; i < allOfThem.length; i++) {
//         allOfThem[i].style.fontSize = 40 + 'px'
//     }
//
// }

// (function () {
// var button3 = document.getElementById("toggleH1");
// console.log(button3)
// function myFunction() {
//     var fontSizeParsed = parseInt(window.getComputedStyle(button3).fontSize) + 5;
//     console.log(fontSizeParsed)
//
//     var allOfThem = document.getElementsByTagName('h1');
//     for (let i = 0; i < allOfThem.length; i++) {
//         if (parseFloat(allOfThem[i].style.fontSize) === fontSizeParsed) {
//             allOfThem[i].style.fontSize = fontSizeParsed + 40 + 'px';
//         } else {
//             allOfThem[i].style.fontSize = fontSizeParsed + 'px';
//         }
//     }
// }
//
// button3.addEventListener('click', myFunction);
// })();

// (function () {
// let h1Elements = document.getElementsByTagName("h1");
//
// setInterval(function () {
//     for (let i = 0; i < h1Elements.length; i++) {
//         if (h1Elements[i].style.fontSize !== "10px") {
//             h1Elements[i].style.fontSize = "10px";
//         } else {
//             h1Elements[i].style.fontSize = "20px";
//         }
//     }
// }, 1000);


// })();
// DOM Question #4

// When the mouse enters the content area of the 4th div with the class of "question", an alert should pop up
// that reads "CONGRATULATIONS ON YOUR NEW CRUISE!";


    // var h1FourthTag = document.getElementsByClassName('question')[3];

    var h1FourthTag = document.querySelector('.question:nth-of-type(4)');

    console.log(h1FourthTag)

    function myFunction() {
        alert('CONGRATULATIONS ON YOUR NEW CRUISE!')
    }

    h1FourthTag.addEventListener('mouseover', myFunction);

})();

// DOM Question# #5

// When a user clicks a button labeled "Google" the user should be redirected to the "https://google.com"

var redirectButton = document.getElementById('google')

redirectButton.addEventListener('click', function () {
    window.location = 'https:www.google.com'
    // location.assign('https:www.google.com')
})

// DOM Question #6

// When the user types something into an input element, the value should be concatenated
// onto the paragraph with the ID of "madLib" once the submit button has been clicked.

var madLibButton = document.getElementById('submitString');
var madLibInput = document.querySelector('#userInput');
var madLibString = document.querySelector('#madLib');


madLibButton.addEventListener('click', function () {
    madLibString.innerHTML += madLibInput.value;


})


/** Tue May 17 - d31w08 ******************************************************************************************/


// TODO: add functionality such that the number in the input will be added to the total in the h1 when the button is clicked
// No changes to the existing HTML is needed, other than adding the needed jQuery/JavaScript.

// HINTS

// add an event listener on the button click that will log to the console the number value in the text input (you will need to prevent the default button behavior of submitting the form)
// $('#add-btn').click(function(e) {
//     e.preventDefault();
//     let inputNumber = parseFloat($('#number-input').val());
//     let outputNumber = parseFloat($('#number-output').text());
//     $('#number-output').text(inputNumber + outputNumber);
// });
// modify the event listener to parse the text value into a number
// target the output element inner text and parse it into a number
// add the input and output values together and update the output with the sum of the current input and output


// jQuery Solution
$('button').click(function(e) {
    e.preventDefault();
    let input = parseFloat($('#number-input').val());
    let output = parseFloat($('#number-output').text());
    $('#number-output').text(input + output);
});

// Vanilla JS Solution
// document.querySelector('button').addEventListener('click', function(e) {
//     e.preventDefault();
//     let input = parseFloat(document.querySelector('#number-input').value);
//     let output = parseFloat(document.querySelector('#number-output').innerText);
//     document.querySelector('#number-output').innerText =  input + output;
// });