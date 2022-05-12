"use strict";

let diffExample = [
    {name: 'amazing thing', price: 1000},
    {name: 'amazing thing', price: 3000},
    {name: 'amazing thing', price: 2},
];

let example = [
    {name: 'tomatoes', price: 4},
    {name: 'potatoes', price: 6},
    {name: 'wine', price: 16},
]

function findHighestPrice (inputArr) {
    let highestObj = inputArr.reduce(function (element, item) {
        return (element.price || 0) > item.price ? element : item;
    })
    return highest
}

console.log(findHighestPrice(diffExample));
console.log(findHighestPrice(example));

// var mostExpPilot = pilots.reduce(function (oldest, pilot) {
//     return (oldest.years || 0) > pilot.years ? oldest : pilot;

//
//
// let obj = {class: 'Mrs. Goodson'};
// console.log(obj.class)
//
// let obj1 = {class: "6th grade history", students: 18}
//
// console.log(obj1.class, obj1.students);
// console.log(obj1.students);
//
// let arrayOfAnything = [0, 1, 2]
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function highestNum(c) {
//     var max = classes[0].students
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i].students > max) {
//             max = classes[i].students
//         }
//     }
//     return max
// }
//
// console.log('Highest number of students', highestNum(classes));
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// let grades = [90, 95, 73, 60]
//
// function tracker(inElement, inTotal, inLoopPass) {
//     console.log('forEach element is', inElement)
//     console.log('forEach total is', inTotal)
//     alert('loopPass # ' + inLoopPass)
// }
//
// // function forEachFindAverage(passInParameter) {
// //     let total = 0;
// //     var loopPass = 0;
// //     passInParameter.forEach((element) => {
// //         total = element + total
// //         loopPass++
// //         tracker(element, total, loopPass)
// //     })
// //     return total / passInParameter.length;
// //
// // }
// // console.log('forEachFindAverage is', forEachFindAverage(grades))
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// function highestForEach(passInParameter) {
//     let max = 0;
//     passInParameter.forEach(element => {
//         console.log('element is', element)
//         if (element > max) {
//             max = element
//             console.log('max is', max)
//         }
//     })
//     return max;
// }
//
// console.log('HighestForEach is', highestForEach(grades))
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// function findAverage(passInParameter) {
//     let total = 0;
//     for (var i = 0; i < passInParameter.length; i++) {
//         total = passInParameter[i] + total
//     }
//     return total / passInParameter.length;
// }
//
// console.log('Average is', findAverage(grades))
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// function highest(passInParameter) {
//     let max = 0;
//     for (var i = 0; i < passInParameter.length; i++) {
//         if (passInParameter[i] > max) {
//             max = passInParameter[i]
//         }
//     }
//     return max;
// }
//
// console.log('Highest is', highest(grades));
//
// // (prev.priceInCents || 0) > current.priceInCents
// //     ? prev
// //     : current
//
// function highestTest(passInParameter) {
//     let max = 0;
//     for (let i = 0; i < passInParameter.length; i++) {
//         if ((passInParameter[i] || 0) > max)
//             max = passInParameter[i]
//     }
//     return max;
// }
//
// console.log('highestTest is', highestTest(grades));
//
// /*************************************************************************************************
//  *************************************************************************************************/
//
// function lowest(passInParameter) {
//     let lowNum = passInParameter[0];
//     for (var i = 0; i < passInParameter.length; i++) {
//         if (passInParameter[i] < lowNum) {
//             lowNum = passInParameter[i]
//         }
//     }
//     return lowNum;
// }
//
// console.log('Lowest is', lowest(grades))
//
// /*************************************************************************************************
//  *************************************************************************************************/
// const products = [
//     {
//         name: 'Water Bottle',
//         priceInCents: 3300,
//         isInStock: true
//     },
//     {
//         name: 'Computer',
//         priceInCents: 45000,
//         isInStock: true
//     },
//     {
//         name: 'Hammer',
//         priceInCents: 4500,
//         isInStock: true
//     },
//     {
//         name: 'Car',
//         priceInCents: 990000,
//         isInStock: true
//     },
//     {
//         name: 'Cup',
//         priceInCents: 230,
//         isInStock: false
//     },
//     {
//         name: 'Book',
//         priceInCents: 540,
//         isInStock: false
//     },
// ]
//
// function stepTracker(inElement, inLoopPass, inIndex) {
//     console.log('filter element is', inElement)
// //    console.log('forEach total is', inTotal)
//     alert('loopPass # ' + inIndex)
// }
//
// function notInStock(inputArrOfObjs) {
//     return inputArrOfObjs.filter(element => !element.isInStock)
// }
//
// console.log('notInStock is', notInStock(products))
//
// function inStockWithFilter(inputArrOfObjs) {
//     return inputArrOfObjs.filter((element, index) => {
//         // stepTracker(element, index)
//         return element.isInStock
//     })
// }
//
// console.log('inStockWithFilter is', inStockWithFilter(products))
//
// function mostExpensiveInStockObj(inputArrOfObjs) {
//     let inStockArrOfObjs = inStockWithFilter(inputArrOfObjs);
//     return inStockArrOfObjs.reduce(function (prev, current, index) {
//         stepTracker(prev, current, index)
//         return (prev.priceInCents || 0) > current.priceInCents
//             ? prev
//             : current
//     })
// }
//
// console.log('mostExpensiveInStockObj is', mostExpensiveInStockObj(products))