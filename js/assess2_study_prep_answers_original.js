"use strict";

/** Mon May 16 ************************************************************************************/

//Write a function named 'returnPriceOfBeer', a function named 'totalPriceOfBasket' and another function 'avgPriceInBasket' that accepts an array of objects where each object represents an item in the basket to be purchased. The price of the items have a price property. The function 'totalPriceOfBasket' should return the total price value of the items in the basket. The function 'avgPriceInBasket' should return the average price value of the items in the basket.

var inBasket = [
    {name: 'doughnuts', price: 7},
    {name: 'apple juice', price: 3},
    {name: 'bird seed', price: 13},
    {name: 'beer', price: 5}
]

function returnPriceOfBeer(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].name === 'beer') {
            return input[i].price
        }
    }
}

// function returnPriceOfBeer(input) {
//     let beerPrice = 0;
//     input.forEach((item) => {
//         if (item.name === 'beer') {
//             beerPrice = item.price
//         }
//     });
//     return beerPrice;
// }

// function totalPriceOfBasket(input) {
//     let totalPrice = 0;
//     for (let i = 0; i < input.length; i++) {
//         totalPrice += input[i].price;
//     }
//     return totalPrice;
// }

function totalPriceOfBasket(input) {
    let totalPrice = 0;
    input.forEach((item) => {
        totalPrice += item.price;
    });
    return totalPrice;
}


// function avgPriceInBasket(input) {
//     let totalPrice = 0;
//     input.forEach((item) => {
//         totalPrice += item.price;
//     });
//     return totalPrice / input.length;
// }

function avgPriceInBasket(input) {
    return totalPriceOfBasket(input) / input.length;
}


console.log('returnPriceOfBeer(inCart) should be 5. Your answer:', returnPriceOfBeer(inBasket));
console.log('totalPriceOfBasket(inCart) should be 28. Your answer:', totalPriceOfBasket(inBasket));
console.log('avgPriceInBasket(inCart) should be 7. Your answer:', avgPriceInBasket(inBasket));

/** Tue May 17 ************************************************************************************/

//Define a function named `isDivisible` that takes in two numeric inputs: a value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.

function isDivisible(input1, input2) {
    // your solution goes inside this function - you can change the names of the parameters input1, input2 to use in this function if you want


}

// tests for isEvenlyDivisible

console.log('isDivisible(75, 5) should be true', isDivisible(75, 5));
console.log('isDivisible(25, 25) should be true', isDivisible(25, 25));
console.log('isDivisible(\'fifty\', 2) should be false', isDivisible('fifty', 2));
console.log('isDivisible( ) should be false', isDivisible());
console.log('isDivisible(50, 2) should be true', isDivisible(50, 2));
console.log('isDivisible(50, 3) should be false', isDivisible(50, 3));
console.log('isDivisible(null, 2) should be false', isDivisible(null, 2));
console.log('isDivisible(50, null) should be false', isDivisible(50, null))

/** Wed May 18 ************************************************************************************/

//Define a function named `cubed` that takes in an input and cubes the input if the input is numeric. If the input is Not A Number, then return false.

function cubed(inputNum) {

}

// tests for cubed
console.log('cubed(3) should be 27', cubed(3))
console.log('cubed(4) should be 64', cubed(4))
console.log('cubed(5) should be -125', cubed(-5))
console.log('cubed(2) should be 8', cubed(2))
console.log('cubed(\'two\') should be false', cubed('two'))
console.log('cubed(null) should be false', cubed(null))
console.log('cubed(true) should be false', cubed(true))
console.log('cubed(false) should be false', cubed(false))
console.log('cubed( ) should be false', cubed())


var customerArrOfObj = [
    {
        customerName: "Barbara",
        items: [
            {name: 'tomatoes', price: 4},
            {name: 'potatoes', price: 6},
            {name: 'wine', price: 16},
        ],
        clubMember: false
    },
    {
        customerName: "Dale",
        items: [
            {name: 'television', price: 400},
            {name: 'xbox', price: 599},
            {name: 'soda', price: 1},
        ],
        clubMember: true
    },
    {
        customerName: "Kenneth",
        items: [
            {name: 'doughnuts', price: 7},
            {name: 'apple juice', price: 3},
            {name: 'bird seed', price: 13},
        ],
        clubMember: true
    }]

// findTotalPriceItemsOfDale
// findAvgItemPriceOfDale
// findCustomerBuyingSmallestTotal
// findClubMemberNames
