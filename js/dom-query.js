"use strict";
// // // TODO: Uncomment next line and get the main header element by id
// let mainHeader = document.getElementById("main-header");
// //
// // // TODO: Set inner html of mainHeader to "JavaScript is Cool"
// mainHeader.innerHTML = "JavaScript is Cool";
//

// let revealedMainHeader = document.getElementById("main-header");
// revealedMainHeader.addEventListener('toggle', )
//
// document.getElementById("btn1").addEventListener('click', function () {
// // document.getElementById("main-header").value
//     document.getElementById("main-header").innerHTML = "JavaScript is Cool"
//     mainHeader.toggleAttribute('hidden')
// })
//
// document.getElementById("btn1").addEventListener('toggle', function () {
// // document.getElementById("main-header").value
//     document.getElementById("main-header").innerHTML = "Hello World"
// })

// document.getElementById("btn1").addEventListener('click', function () {
//     if (document.getElementById("main-header").innerHTML === "JavaScript is Cool") {
//         document.getElementById("main-header").innerHTML = "Hello World!";
//     } else {
//         document.getElementById("main-header").innerHTML = "JavaScript is Cool";
//     }
// });

let toggleHeader = document.getElementById("btn1");
    toggleHeader.classList.toggle(document.getElementById("main-header").innerHTML = "JavaScript is Cool")


// // TODO: Uncomment the next line and get the sub header element by id
// let subHeader = document.getElementById("sub-header");
//
// // TODO: Set the text color of subHeader to blue
// subHeader.style.color = "blue";

document.getElementById("btn2").addEventListener('click', function () {
// document.getElementById("main-header").value
    document.getElementById("sub-header").style.color = "blue";
})


// // TODO: Uncomment the next line and get all list items
// let listItems = document.getElementsByTagName("li");
//
// // TODO: Set text color on every other list item to grey
// // TODO: Set text color of li with dbid = 1 to blue
//
// for (var i = 0; i < listItems.length; i++) {
//     if (i % 2 === 1) {
//         listItems[i].style.color = "blue";
//     }
// }
// listItems[0].style.color = "white";
// listItems[0].style.backgroundColor = "blue";

document.getElementById("btn3").addEventListener('click', function () {
// document.getElementById("main-header").value
    let listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
            listItems[i].style.color = "blue";
        }
    }
})

// // TODO: Uncomment the next line and get all elements with class name sub-paragraph
// let subParagraphs = document.querySelectorAll(".sub-paragraph");
//
// // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
// subParagraphs[0].innerHTML = "Mission Accomplished!"

document.getElementById("btn4").addEventListener('click', function () {
// document.getElementById("main-header").value
    let subParagraphs = document.querySelectorAll(".sub-paragraph");
    subParagraphs[0].innerHTML = "Mission Accomplished!";
})