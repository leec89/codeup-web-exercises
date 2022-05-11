"use strict";

/**
 *
 * Create a file called js-warm-ups.html and add script tags to write JavaScript code.
 *
 * Write a function, returnFirstAndLast, that takes in an array of values and returns an array of just the first and last elements. Assume the input array contains at least two elements. The function should not mutate the input array.
 *
 * Examples...
 *
 * returnFirstAndLast([1, 2, 3, 4]) // returns [1, 4]
 * returnFirstAndLast(['hello', 'bob', 7, null, 'world']) // returns ['hello', 'world']
 * returnFirstAndLast(['hello', 'world']) // returns ['hello', 'world']
 *
 *
 * Write a function, returnEveryOtherElement, that takes in an array of inputs and returns an array of every other input, starting with the first. Assume the array will contain at least three elements. The function should not mutate the input array.
 *
 * Examples...
 *
 * returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]
 * returnEveryOtherElement([1, 2, 3]) // returns [1, 3]
 * returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']
 * returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]
 */

/*
function returnFirstAndLast (inputArr) {
    return [inputArr[0], inputArr[inputArr.length - 1]]
}

console.log(returnFirstAndLast([1, 2, 3, 4])) // returns [1, 4]
console.log(returnFirstAndLast(['hello', 'bob', 7, null, 'world'])) // returns ['hello', 'world']
console.log(returnFirstAndLast(['hello', 'world'])) // returns ['hello', 'world']

function returnEveryOtherElement (inputArr) {
    var newArr = [];
    for (var i = 0; i < inputArr.length; i += 2) {
        newArr.push(inputArr[i])
    }
    return newArr;
}

console.log(returnEveryOtherElement([1, 2, 3, 4, 5])) // returns [1, 3, 5]
console.log(returnEveryOtherElement([1, 2, 3])) // returns [1, 3]
console.log(returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred'])) // returns ['bob', 'cathy']
console.log(returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // returns [10, 8, 6, 4, 2]
*/

/*
var trails = [
    {
        name: "Salado Creek Greenway",
        distanceInMiles: 20,
        isPaved: true
    },
    {
        name: "Leon Creek Greenway",
        distanceInMiles: 20.1,
        isPaved: true
    },
    {
        name: "McAllister Park: Blue Loop",
        distanceInMiles: 6.3,
        isPaved: false
    },
    {
        name: "Phil Hardberger Park: Geology Trail",
        distanceInMiles: 0.8,
        isPaved: false
    }
]

function trailDistance (inputObj) {
    var totalMiles = 0;
    inputObj.forEach(function(trail) {
        if (!trail.isPaved) {
            totalMiles += trail.distanceInMiles;
        }
    })
    return totalMiles;
}

console.log('Distance on non-paved trails is',trailDistance(trails),'miles.');

// d17w05, Tue Apr 26 warmup

function returnAlpha (inputStr) {
    var strIntoArray = inputStr.split('');
    var sorted = strIntoArray.sort();
    return sorted.join('');
}
console.log('\'webmaster\' alphabetized is: ',returnAlpha('webmaster')) //'abeemrstw'
console.log('\'developer\' alphabetized is: ',returnAlpha('developer')) //'deeeloprv'
*/

// d18w05, Wed Apr 27 warmup

/*
================================= WARM UP

Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:
{
  lowest: LOWEST_NUMBER_HERE,
  highest: HIGHEST_NUMBER_HERE
}
Assume both inputs are number data types. The first argument may or may not be higher than the second argument. If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.

EXAMPLES...

createNumObject(1, 3) // returns...
  {
    lowest: 1,
    highest: 3
  }
createNumObject(10, 5) // returns...
  {
    lowest: 5,
    highest: 10
  }
createNumObject(7, 7) // returns...
  {
    lowest: 7,
    highest: 7
  }
*/

/*
function createNumObject (num1, num2) {
    return num1 >= num2
        ? {lowest: num2, highest: num1}
        : {lowest: num1, highest: num2}
}

console.log(createNumObject(7, 7));
console.log(createNumObject(1, 3))
console.log(createNumObject(10, 5))

 */

/*
================================= WARM UP

Consider an array of product objects:
*/
const products = [
    {
        name: 'Hammer',
        priceInCents: 4500,
        isInStock: true
    },
    {
        name: 'Computer',
        priceInCents: 45000,
        isInStock: true
    },
    {
        name: 'Water Bottle',
        priceInCents: 3300,
        isInStock: true
    },
    {
        name: 'Car',
        priceInCents: 990000,
        isInStock: true
    },
    {
        name: 'Cup',
        priceInCents: 230,
        isInStock: false
    },
    {
        name: 'Book',
        priceInCents: 540,
        isInStock: false
    },
];

/**
 *
 * Create the following functions that take in an array of product objects and return various values:
 *
 * returnMostExpensiveProductObjectInStock(products)
 *
 * returnLeastExpensiveProductObjectInStock(products)
 *
 * returnAveragePriceOfAllProductsInStock(products)
 *
 * returnProductObjectsNotInStock(products)
 *
 */


function returnMostExpensiveProductObjectInStock(inputArrOfObjs) {
    let highestPrice = 0;
    let highestObj = {};
    inputArrOfObjs.forEach(function (element) {
        if ((element.priceInCents > highestPrice) && (element.isInStock)) {
            highestObj = element
        }
    })
    return highestObj
}

console.log('forEach - returnMostExpensiveProductObjectInStock is', returnMostExpensiveProductObjectInStock(products));

/***************************************/

function returnLeastExpensiveProductObjectInStock(inputArrOfObjs) {
    let lowestPrice = inputArrOfObjs[0].priceInCents;
    let lowestObj = {};
    inputArrOfObjs.forEach(function (element) {
        if ((element.priceInCents < lowestPrice) && (element.isInStock)) {
            lowestObj = element
        }
    })
    return lowestObj
}

console.log('forEach - returnLeastExpensiveProductObjectInStock is', returnLeastExpensiveProductObjectInStock(products));

/***************************************/

function returnAveragePriceOfAllProductsInStock(inputArrOfObjs) {
    let total = 0;
    let count = 0;
    inputArrOfObjs.forEach(function (element) {
        if (element.isInStock) {
            total += element.priceInCents;
            count++;
        }
    })
    return total / count;
}

console.log('forEach - returnAveragePriceOfAllProductsInStock is', returnAveragePriceOfAllProductsInStock(products));

/***************************************/

function returnProductObjectsNotInStock(inputArrOfObjs) {
    let outOfStock = [];
    inputArrOfObjs.forEach(function (element) {
        if (element.isInStock === false) {
            outOfStock.push(element)
        }
    })
    return outOfStock;
}

console.log('forEach - returnProductObjectsNotInStock is', returnProductObjectsNotInStock(products));

/***************************************/

function notInStockWithFilter(inputArrOfObjs) {
    return inputArrOfObjs.filter(element => !element.isInStock)
}

console.log('notInStockWithFilter is', notInStockWithFilter(products))

/***************************************/

function inStockWithFilter(inputArrOfObjs) {
    return inputArrOfObjs.filter(element => element.isInStock)
}

console.log('inStockWithFilter is', inStockWithFilter(products))

/***************************************/

/**
 *
 * var pilots = [
 *   {
 *     id: 10,
 *     name: "Poe Dameron",
 *     years: 14,
 *   },
 *   {
 *     id: 2,
 *     name: "Temmin 'Snap' Wexley",
 *     years: 30,
 *   },
 *   {
 *     id: 41,
 *     name: "Tallissan Lintra",
 *     years: 16,
 *   },
 *   {
 *     id: 99,
 *     name: "Ello Asty",
 *     years: 22,
 *   }
 * ];
 *
 * var mostExpPilot = pilots.reduce(function (oldest, pilot) {
 *     return (oldest.years || 0) > pilot.years ? oldest : pilot;
 *
 */

function mostExpensiveInStockObj(inputArrOfObjs) {
    let inStock = inStockWithFilter(inputArrOfObjs);
    return inStock.reduce(function (element, product) {
        return (element.priceInCents || 0) > product.priceInCents
            ? element
            : product
    })
}

console.log('mostExpensiveInStockObj is', mostExpensiveInStockObj(products))

/***************************************/

function leastExpensiveInStockObj(inputArrOfObjs) {
    let inStock = inStockWithFilter(inputArrOfObjs);
    return inStock.reduce(function (element, product) {
        return (element.priceInCents || 0) < product.priceInCents
            ? element
            : product
    })
}

console.log('leastExpensiveInStockObj is', leastExpensiveInStockObj(products))

/***************************************/

function averagePricesInStockWithReduce(inputArrOfObjs) {
    let inStock = inStockWithFilter(inputArrOfObjs);
    return inStock.reduce((element, product) => element + product.priceInCents, 0) / inStock.length;
}

console.log('averagePricesInStockWithReduce is', averagePricesInStockWithReduce(products))

/***************************************/

function leastExpensiveInStockWithFilterReduce(inputArrOfObjs) {
    return inputArrOfObjs.filter(element => element.isInStock).reduce((element, product) =>
        (element.priceInCents || 0) < product.priceInCents
            ? element
            : product)
}

console.log('chained - leastExpensiveInStockWithFilterReduce is', leastExpensiveInStockWithFilterReduce(products))

/***************************************/

function leastExpensiveInStockWithReduce(inputArrOfObjs) {
    return inputArrOfObjs.reduce((accumulator, currentValue) => {
        if (currentValue.priceInCents < accumulator && currentValue.isInStock) {
            accumulator = currentValue
        }
        return accumulator
    }, inputArrOfObjs[0].priceInCents)
}

console.log('single - leastExpensiveInStockWithReduce is', leastExpensiveInStockWithReduce(products))

/***************************************/

/**
 *
 * d25w07, Mon May 9 warmup
 *
 * Write a function that accepts an array of numbers and returns the average.
 *
 *     Test inputs:
 *     [3, 5, 7, 10, 0]
 *     [0, 3, 5, 6, 21]
 *
 *
 * let total = donations.reduce((total,donation) => {
 *    return total + donation;
 * });
 *
 */

function findAverages(inputArr) {
    let sum = inputArr.reduce((total, element) => {
        return total += element;
    });
    return sum / inputArr.length
}

console.log('findAverages is ', findAverages([3, 5, 7, 10, 0]))
console.log('findAverages is ', findAverages([0, 3, 5, 6, 21]))

/**
 *
 * d26w07, Tue May 10 warmup
 *
 * let classes = [
 *     {class: "6th grade history", students: 18},
 *     {class: "7th grade history", students: 20},
 *     {class: "8th grade history", students: 22}
 * ];
 *
 * // Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
 *
 * // Bonus: instead of the total students, return the highest number of students in any class
 *
 */

let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents (inputArrOfObjs) {
    return inputArrOfObjs.reduce(function (sum, student) {
        return sum + student.students;
    }, 0)
}

function highestAmtOfStudentsObj (inputArrOfObjs) {
    return inputArrOfObjs.reduce(function (element, student) {
        return (element.students || 0) > student.students
            ? element
            : student
    })
}

function highestAmtOfStudents(inputArrOfObjs) {
    let highest = 0;
    inputArrOfObjs.forEach(function (element) {
        if (element.students > highest) {
            highest = element.students
        }
    })
    return highest;
}

console.log('calculateTotalStudents is ', calculateTotalStudents(classes));
console.log('highestAmtOfStudentsObj is ', highestAmtOfStudentsObj(classes));
console.log('highestAmtOfStudents', highestAmtOfStudents(classes));

/***************************************/

/**
 *
 * d27w07, Wed May 11 warmup
 *
 * // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
 *
 * //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
 *
 *
 * var neighborhood1 ={
 *     neighborhood: "Lovely Estates",
 *     medianHomePrice: 280000,
 *     pool: true,
 *     tennis: false,
 *     crimeRate: "low",
 *     schools: [
 *         {name: "ES1", rating: 8},
 *         {name: "MS2", rating: 6},
 *         {name: "HS3", rating: 8}
 *     ]
 * }
 *
 * var neighborhood2 ={
 *     neighborhood: "Luminous Estates",
 *     medianHomePrice: 270000,
 *     pool: true,
 *     tennis: false,
 *     crimeRate: "low",
 *     schools: [
 *         {name: "ES1", rating: 8},
 *         {name: "MS2", rating: 8},
 *         {name: "HS3", rating: 8}
 *     ]
 * }
 *
 * var neighborhood3 ={
 *     neighborhood: "Ginormous Ego Estates",
 *     medianHomePrice: 350000,
 *     pool: true,
 *     tennis: true,
 *     crimeRate: "low",
 *     schools: [
 *         {name: "ES1", rating: 9},
 *         {name: "MS2", rating: 9},
 *         {name: "HS3", rating: 9}
 *     ]
 * }
 *
 * // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
 *
 *
 */

var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

function convertToObject (inputStr, inputNum) {
    return {class: inputStr, students: inputNum};
}
console.log('convertToObject', convertToObject("Intro to Programming", 20));

function desirableNeighborhood (inputNeighborhoodObj) {

    function calculateTotalRating (inputArrOfObjs) {
        return inputArrOfObjs.reduce(function (ratingSum, school) {
            return ratingSum + school.rating;
        }, 0)
    }

    let medianHomePrice = false;
    let crimeRateLow = false;
    let schoolRatings = false;
    if (inputNeighborhoodObj.medianHomePrice < 300000) medianHomePrice = true;
    if (inputNeighborhoodObj.crimeRate === 'low') crimeRateLow = true;
    if (calculateTotalRating(inputNeighborhoodObj.schools) >= 24) schoolRatings = true;
    return (medianHomePrice && crimeRateLow && schoolRatings)
}

console.log('desirableNeighborhood1', desirableNeighborhood(neighborhood1));
console.log('desirableNeighborhood2', desirableNeighborhood(neighborhood2));
console.log('desirableNeighborhood3', desirableNeighborhood(neighborhood3));

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

function findLangsArr(inputUsers) {
    let languages = [];
    inputUsers.forEach((user) => {
        languages.push(user.languages)
    })
    return languages;
}

console.log('findLangsArr is ', findLangsArr(users))

/***************************************/

function allLangs(foundLanguagesArr) {
    return foundLanguagesArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
}

console.log('nested - allLangs(findLangsArr(users)) is ', allLangs(findLangsArr(users)))

/***************************************/

function uniqueLangs(bunchOfLanguages) {
    return bunchOfLanguages.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

console.log('nested - uniqueLangs(allLangs(findLangsArr(users))) is ', uniqueLangs(allLangs(findLangsArr(users))));

/***************************************/

function findLangsWithReduce(inputUsers) {
    return inputUsers.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue.languages)) {
            accumulator.push(currentValue.languages)
        }
        return accumulator;
    }, [])
}

console.log('findLangsWithReduce is ', findLangsWithReduce(users))

/***************************************/
/*************https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce*****************/

function allLangsWithReduce(inputUsers) {
    return inputUsers.reduce(function (previousValue, currentValue) {
        return [...previousValue, ...currentValue.languages]
    }, [])
}

console.log('allLangsWithReduce is ', allLangsWithReduce(users))

/***************************************/

function uniqueLanguagesFoundWithReduce(inputUsers) {
    return inputUsers.reduce((accumulator, currentValue) => {
        let languageArray = currentValue.languages;
        languageArray.forEach(element => {
            if (accumulator.indexOf(element) === -1) {
                accumulator.push(element)
            }
        })
        return accumulator;
    }, []);
}

console.log('uniqueLanguagesFoundWithReduce is/are ', uniqueLanguagesFoundWithReduce(users))

/***************************************/

function findJavascriptUsersWithReduce(inputUsers) {
    return inputUsers.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue.languages)) {
            if (currentValue.languages.indexOf('javascript') !== -1) {
                accumulator.push(currentValue.name)
            }
        }
        return accumulator;
    }, []);
}

console.log('Javascript Users is/are ', findJavascriptUsersWithReduce(users))