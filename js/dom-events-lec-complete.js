"use strict";

(function(){
    // Change background of body to moon-surface, and change text of h1 to be "Whoa, look at that big ball of water and dirt."
    document.getElementById("moon-travel").addEventListener("dblclick", function(event) {
        console.log(event);
        document.getElementById("main-content").style.backgroundImage = "url('img/moon-surface.png')";
        document.getElementById("moon-travel").innerText = "Whoa, look at that big ball of water and dirt."
    })


    // Target
    var goku = document.getElementById("goku");
    // Logic for Event
    var gokuEvent = function () {
        goku.src = "img/goku-mad.png";
    }
    // Register the event.
    goku.addEventListener("mouseover", gokuEvent)
    goku.addEventListener("mouseout", function() {
        console.log("Hey!")
        goku.src = "img/goku-normal.png";
    })


    // Removing the mouseover event
    document.querySelector('.goku-chill').addEventListener("click", function () {
        goku.removeEventListener("mouseover", gokuEvent)
    })


    // KEYBOARD EVENT

    // When I press the spacebar, I want to change the display property to inline.

    // keyup - when key is released, fires once
    // keydown - when the key is pressed, can fire repetitively.

    // document.addEventListener("keyup", function(event) {
    //     // console.log(event)
    //     if (event.key === " ") {
    //         document.querySelector(".space-bar").style.display = "inline";
    //     }
    // })

    // When I click the change color button, the color property of the body will change to the VALUE of the input.
    document.getElementById("color-btn").addEventListener("click", function() {
        var pickedColor = document.getElementById("text-color").value;
        document.getElementById("main-content").style.color = pickedColor;
    })

    // CHANGE EVENT
    // When an option is selected/changed, change the innerHTML of the element with the result class to state that the item is important.
    document.querySelector("#travel-items").addEventListener("change", function(event) {
        console.log(event);
        document.querySelector(".result").innerHTML = "I agree that " + event.target.value + " is important as well."
    })

    // target.addEventListener(type, callbackFunction(){
    //      Whatever is written here will happen when the event fires off.
    // })

    'use strict';

    var listener = function (event) {
        alert('You clicked the button!');
    }

    // add event listener to btn1
    var btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', listener);

    var remover = function (event) {
        // remove event listener from btn1
        btn1.removeEventListener('click', listener);
        console.log('Event listener removed.');
    }

    // add event listener to btn2
    var btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', remover);


})();