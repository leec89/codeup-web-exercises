"use strict";

let obj = {class: 'Mrs. Goodson'};
console.log(obj.class)

let obj1 = {class: "6th grade history", students: 18}

console.log(obj1.class, obj1.students);
console.log(obj1.students);

let arrayOfAnything = [0,1,2]

/*************************************************************************************************
 *************************************************************************************************/

let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function highestNum(c) {
    var max = classes[0].students
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].students > max) {
            max = classes[i].students
        }
    }
    return max
}
console.log('Highest number of students', highestNum(classes));

/*************************************************************************************************
 *************************************************************************************************/

let grades = [90, 95, 73, 60]

function tracker (inElement, inTotal, inLoopPass) {
    console.log('forEach element is', inElement)
    console.log('forEach total is', inTotal)
    alert('loopPass # ' + inLoopPass)
}

function forEachFindAverage(passInParameter) {
    let total = 0;
    var loopPass = 0;
    passInParameter.forEach((element) => {
        total = element + total
        loopPass++
        tracker(element, total, loopPass)
    })
    return total / passInParameter.length;

}
console.log('forEachFindAverage is', forEachFindAverage(grades))

/*************************************************************************************************
 *************************************************************************************************/

function highestForEach(passInParameter) {
    let max = 0;
    passInParameter.forEach(element => {
        console.log('element is', element)
        if (element > max) {
            max = element
            console.log('max is', max)
        }
    })
    return max;
}
console.log('HighestForEach is', highestForEach(grades))

/*************************************************************************************************
 *************************************************************************************************/

function findAverage(passInParameter) {
    let total = 0;
    for (var i = 0; i < passInParameter.length; i++) {
        total = passInParameter[i] + total
    }
    return total / passInParameter.length;
}
console.log('Average is', findAverage(grades))

/*************************************************************************************************
 *************************************************************************************************/

function highest(passInParameter) {
    let max = 0;
    for (var i = 0; i < passInParameter.length; i++) {
        if (passInParameter[i] > max) {
            max = passInParameter[i]
        }
    }
    return max;
}
console.log('Highest is', highest(grades))

/*************************************************************************************************
 *************************************************************************************************/

function lowest(passInParameter) {
    let lowNum = passInParameter[0];
    for (var i = 0; i < passInParameter.length; i++) {
        if (passInParameter[i] < lowNum) {
            lowNum = passInParameter[i]
        }
    }
    return lowNum;
}
console.log('Lowest is', lowest(grades))