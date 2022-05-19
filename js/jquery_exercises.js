"use strict";

// $(function () {
//     $('#pageLink').html('<h2>Link to somewhere</h2>');
//     alert($(".paragraph-text").html());
//     $(".codeup").css("border", "1px solid red");
//     $("li").css("font-size", "20px");
//     $("h1").css("background-color", "#234567");
//     $("p").css("background-color", "#298765");
//     $("li").css("background-color", "#987654");
//     $("h1").css("background-color", "#FF00FF");
//     $("p").css("background-color", "#FF00FF");
//     $("li").css("background-color", "#FF00FF");
//     alert($('pageLink').html());
//     $("h1, p, li").css("background-color", "#888444");
//
//
// });

$('h1').on('click', function (e) {
    e.target.style.backgroundColor = "#FF00FF"
})


// var h2header = $('h2');
$('h2').on('dblclick', function (e) {
    e.target.style.backgroundColor = "#234567"
    e.target.style.color = "white"
})

// let test = document.getElementById("list");

// test.addEventListener("mouseover", function (event) {
//     //highlight the mouseover target
//     event.target.style.color = "red";
// }, false);
//
// test.addEventListener("mouseout", function (event) {
//     // highlight the mouseout target
//     event.target.style.color = "black";
// }, false);

$('li').hover(

    function () {
        $(this).css('color', 'red')
    },
    function () {
        $(this).css('color', 'black')
    })


// var liItems = $('li');
// liItems.on('mouseenter', liItems, function() {
//     //do something
//     $(this).css('color', 'red')
//     $(this).css('fontSize', '30px')
// });
// liItems.on('mouseleave', liItems, function() {
//     //do something
//     $(this).css('color', 'black')
//     $(this).css('fontSize', '20px')
// });


// To also increase font size with mouseover
//
// liItems.on('mouseenter', liItems, function() {
//     //do something
//     $(this).css('fontSize', '30px')
// });
// liItems.on('mouseleave', liItems, function() {
//     //do something
//     $(this).css('fontSize', '20px')
// });