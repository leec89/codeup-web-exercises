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

function returnPriceOfBeerForLoop(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].name === 'beer') {
            return input[i].price
        }
    }
}
console.log('returnPriceOfBeerForLoop(inBasket) should be 5. Your answer:', returnPriceOfBeerForLoop(inBasket));

/** Mon May 13 - Total Price using 'for loop'************************************************************************/

function totalPriceOfBasketForLoop(input) {
    let totalPrice = 0;
    for (let i = 0; i < input.length; i++) {
        totalPrice = totalPrice + input[i].price;
    }
    return totalPrice;
}
console.log('totalPriceOfBasketForLoop(inBasket) should be 28. Your answer:', totalPriceOfBasketForLoop(inBasket));

/** Mon May 13 - Total Price using 'forEach loop'********************************************************************/

function totalPriceOfBasketForEach(input) {
    let totalPrice = 0;
    input.forEach((item) => {
        totalPrice += item.price;
    });
    return totalPrice;
}
console.log('totalPriceOfBasketForEach(inBasket) should be 28. Your answer:', totalPriceOfBasketForEach(inBasket));

/** Mon May 13 - Average Price using 'forEach loop' *****************************************************************/

function avgPriceInBasketForEach(input) {
    let totalPrice = 0;
    input.forEach((item) => {
        totalPrice += item.price;
    });
    return totalPrice / input.length;
}
console.log('avgPriceInBasketForEach(inBasket) should be 7. Your answer:', avgPriceInBasketForEach(inBasket));

/** Mon May 13 - Average Price reusing function TotalPrice *********************************************************/

function avgPriceInBasketWithReuse(input) {
    return totalPriceOfBasketForLoop(input) / input.length;
}
console.log('avgPriceInBasketWithReuse(inBasket) should be 7. Your answer:', avgPriceInBasketWithReuse(inBasket));

/** Mon May 13 - forEachFindAvgWithTracker using Tracker function to see forEach loop steps*************************/

function trackerBasket(inElement, inTotal, inLoopPass) {
    console.log('Element is', inElement)
    console.log('Element price is', inElement.price)
    console.log('Total is', inTotal)
    alert('loopPass # ' + inLoopPass)
}

function forEachFindAvgWithTracker(passInParameter) {
    let total = 0;
    var loopPass = 0;                               // used only for tracking output, not to find average
    passInParameter.forEach((element) => {
        total = total + element.price
        loopPass++                                  // used only for tracking output, not to find average
        trackerBasket(element, total, loopPass)           // used only for tracking output, not to find average
    })
    return total / passInParameter.length;

}
console.log('forEachFindAvgWithTracker is', forEachFindAvgWithTracker(inBasket))

/** Mon May 13 - totalOfGrades using Tracker function to see for loop steps ***************************************/

let grades = [90, 95, 73, 60]

function trackerGrades(index, element, total, inLoopPass) {
    console.log('index is', index);
    console.log('grades[' + index + '] is', element);
    console.log('totalGrades is', total);
    alert('loopPass # ' + inLoopPass)
}

function totalOfGrades(input) {
    var loopPass = 0;                               // used only for tracking output, not to find average
    let totalGrades = 0;
    for (let i = 0; i < input.length; i++) {
        totalGrades += input[i];
        loopPass++                                  // used only for tracking output, not to find average
        trackerGrades(i, input[i], totalGrades, loopPass)    // used only for tracking output, not to find average
    }
    return totalGrades;
}

console.log('function totalOfGrades returned', totalOfGrades(grades))