/**
 *
 * Define a function named `isAString` that takes in a value and returns true if the input is a string, or false if the input is not a string.
 *
 * */

function isAString(inputStr) {
    return typeof inputStr === 'string';
}

console.log('function isAString')
console.log(isAString('hello world!'), 'true');
console.log(isAString(21), 'false');
console.log(isAString(true), 'false');
console.log('') //break

/**
 *
 * Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number. This function should consider that numeric strings are not numbers.
 *
 * */

function isNotANumber (inputNum) {
    return typeof inputNum !== 'number';
}

console.log('function isNotANumber')
console.log(isNotANumber('hello world!'), 'true');
console.log(isNotANumber(21), 'false');
console.log(isNotANumber('21'), 'true');
console.log(isNotANumber(true), 'true');
console.log('') //break

/**
 * Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string, or false if the input is not a string or if it cannot be parsed to a number.
 *
 * */

function canBeANumber (inputNum2) {
    return !isNaN(parseFloat(inputNum2));
}

console.log('function canBeANumber')
console.log(canBeANumber('hello world!'), 'false');
console.log(canBeANumber(21), 'true');
console.log(canBeANumber('21'), 'true');
console.log(canBeANumber(true), 'false');
console.log('') //break

/**
 * Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result. If the input is not a number and is not a numeric string, it returns false.
 *
 * */

function multiplyByTen (inputMult10) {
    if (!canBeANumber(inputMult10)) {
        return false;
    } else
        return inputMult10 * 10;
}

console.log('function multiplyByTen')
console.log(multiplyByTen('hello world!'), 'false');
console.log(multiplyByTen(21), 210);
console.log(multiplyByTen('21'), 210);  //type coercion going on
console.log(multiplyByTen(true), 'false');
console.log('') //break

/**
 * Write a function named `randomNumber` that takes in an input and returns a random number between zero and the value of the input.
 **/

function randomNumber(inputNum) {
    return (Math.random() * inputNum)
}

console.log('function randomNumber')
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log('') //break
/**
 * Write a function that takes in a string and returns the length of the string. If the input is not a string, it should be converted to a string and still return the length of the string.
 **/

function stringToLength (inputStr) {
    return inputStr.toString().length;
}

console.log('function stringToLength')
console.log(stringToLength('Hello World!'), 12);
console.log(stringToLength(true), 4);
console.log(stringToLength(10), 2);
console.log(stringToLength('1000'), 4);
console.log('') //break

/**
 * Write a function that takes in two strings. The second string should be a single character. The function should return the index of the second input in the first input. If the second input is more than one character or is not in the first input at all, it should return false.
 */

function indexOfCharacter(input1, input2) {
    if (input2.length > 1 || input1.indexOf(input2) === -1) {
        return false;
    }
    return input1.indexOf(input2);
}

console.log('function indexOfCharacter')
console.log(indexOfCharacter('Hello World!','o'), 'index 4');
console.log(indexOfCharacter('asdfasdf', 'g'), false);
console.log(indexOfCharacter('asdfasdf', 'as'), false);
console.log(indexOfCharacter('1000', '0'), 'index 1');
console.log('') //break