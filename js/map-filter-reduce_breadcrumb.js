"use strict";

/** Crawl Walk Run of Map, Filter, Reduce *************************************/

/** going to use a for loop, then forEach, and then either Map, Filter, Reduce to slowly show the concepts behind each of them **/

/** ************************************************************** **/
/** CRAWL, WALK, RUN - finding the sum total of the array elements **/

let numbers = [1,2,3,4,5,6,7]     //total sum of the elements in the array is 28

// CRAWL: finding total with for loop

function numbersTotalWithForLoop (numbersIn) {
    let total = 0;
    for (let i = 0; i < numbersIn.length; i++) {
        total += numbersIn[i];
    }
    return total
}
console.log('numbersTotalWithForLoop is:', numbersTotalWithForLoop(numbers))

// WALK: finding total with forEach

function numbersTotalWithForEach (numbersIn) {
    let total = 0
    numbersIn.forEach((number) => total += number)
    return total
}
console.log('numbersTotalWithForEach is:', numbersTotalWithForEach(numbers))

// RUN: finding total with reduce

function numbersTotalWithReduce (numbersIn) {
    return numbersIn.reduce((sum, item) => sum + item)
}
console.log('numbersTotalWithReduce is:', numbersTotalWithReduce(numbers))

// BONUS: getting the average of numbers array hint - total divided by number of elements

console.log('BONUS: Average of numbers array', numbersTotalWithReduce(numbers) / numbers.length)

/** **************************************************************** **/
/** CRAWL, WALK, RUN - finding the odd numbers in the array elements **/

// CRAWL: finding odd numbers with for loop

function oddNumsWithForLoop (numbersIn) {
    let newArr = [];
    for (let i = 0; i < numbersIn.length; i++) {
        if (numbersIn[i] % 2 === 1) {
            newArr.push(numbersIn[i]);
        }
    }
    return newArr
}
console.log('oddNumsWithForLoop is:', oddNumsWithForLoop(numbers))

// WALK: finding odd numbers with forEach

function oddNumsWithForEach (numbersIn) {
    let newArr = []
    numbersIn.forEach((number) => {
        if (number % 2 === 1) {
            newArr.push(number);
        }
    })
    return newArr
}
console.log('oddNumsWithForEach is:', oddNumsWithForEach(numbers))

// RUN: finding total with filter

function oddNumsWithFilter (numbersIn) {
    return numbersIn.filter((number) => number % 2 === 1)
}
console.log('oddNumsWithFilter is:', oddNumsWithFilter(numbers))

// BONUS: finding odds with reduce

function oddNumsWithReduce (numbersIn) {
    return numbersIn.reduce((bucket, number) => {
        if (number % 2 === 1) {
            bucket.push(number)
        }
        return bucket
    },[])
}
console.log('BONUS: oddNumsWithReduce is:', oddNumsWithReduce(numbers))

/** **************************************************************** **/
/** CRAWL, WALK, RUN - adding 2 to each element in the numbers array **/

// CRAWL: adding 2 to each element with for loop

function add2ToEachArrEleWithForLoop (numbersIn) {
    let newArr = [];
    for (let i = 0; i < numbersIn.length; i++) {
            newArr.push(numbersIn[i] + 2);
        }
    return newArr
}
console.log('add2ToEachArrEleWithForLoop is:', add2ToEachArrEleWithForLoop(numbers))

// WALK: adding 2 to each element with forEach

function add2ToEachArrEleWithForEach (numbersIn) {
    let newArr = [];
    numbersIn.forEach((number) => {
        newArr.push(number + 2)
    })
    return newArr
}
console.log('add2ToEachArrEleWithForEach is:', add2ToEachArrEleWithForEach(numbers))

// RUN: adding 2 to each element with map

function add2ToEachArrEleWithMap (numbersIn) {
    return numbersIn.map((number) => number + 2)
}
console.log('add2ToEachArrEleWithMap is:', add2ToEachArrEleWithMap(numbers))

// BONUS: adding 2 to each element with reduce

function add2ToEachArrEleWithReduce (numbersIn) {
    return numbersIn.reduce((bucket, number) => {
            bucket.push(number + 2)
        return bucket
    },[])
}
console.log('BONUS: add2ToEachArrEleWithReduce is:', add2ToEachArrEleWithReduce(numbers))