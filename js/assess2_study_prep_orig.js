"use strict";

/** Find a time to focus on this - please don't 'squeeze' this in or multi-task with something else. DO NOT SPEND MORE THAN 10-15mins per function to get it to work. If you spend more time than that, you need to stop. We'll go over the answers. We'll practice and become aware of the gotcha's. This is not punishment but the path towards knowledge. Don't worry, it will come to you. Again, do not spend more that 10-15mins per function.

/** Mon May 16 ************************************************************************************/

//Write a function named 'returnPriceOfBeer', a function named 'totalPriceOfBasket' and another function 'avgPriceInBasket' that accepts an array of objects where each object represents an item in the basket to be purchased. The price of the items have a price property. The function 'totalPriceOfBasket' should return the total price value of the items in the basket. The function 'avgPriceInBasket' should return the average price value of the items in the basket.

var inBasket = [
    {name: 'doughnuts', price: 7},
    {name: 'apple juice', price: 3},
    {name: 'bird seed', price: 13},
    {name: 'beer', price: 5}
]

function returnPriceOfBeer(input) {

}

function totalPriceOfBasket(input) {

}

function avgPriceInBasket(input) {

}

// Function answers below. Do NOT edit please.
console.log('returnPriceOfBeer(inCart) should be 5. Your answer:', returnPriceOfBeer(inBasket));
console.log('totalPriceOfBasket(inCart) should be 28. Your answer:', totalPriceOfBasket(inBasket));
console.log('avgPriceInBasket(inCart) should be 7. Your answer:', avgPriceInBasket(inBasket));

let grades = [90, 95, 73, 60]

function tracker(inElement, inTotal, inLoopPass) {
    console.log('forEach element is', inElement)
    console.log('forEach total is', inTotal)
    alert('loopPass # ' + inLoopPass)
}

function forEachFindAverage(passInParameter) {
    let total = 0;
    var loopPass = 0;                               // used only for tracking output, not to find average
    passInParameter.forEach((element) => {
        total = element + total
        loopPass++                                  // used only for tracking output, not to find average
        tracker(element, total, loopPass)           // used only for tracking output, not to find average
    })
    return total / passInParameter.length;

}
console.log('forEachFindAverage is', forEachFindAverage(grades))

