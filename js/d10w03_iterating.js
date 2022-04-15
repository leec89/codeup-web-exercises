(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Chase', 'Michael', 'Alfredo', 'Marcus'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('The length of array is ' + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log('1. Name at index 0: ' + names[0]);
    console.log('2. Name at index 1: ' + names[1]);
    console.log('3. Name at index 2: ' + names[2]);
    console.log('4. Name at index 3: ' + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var x = 0; x < names.length; x++) {
        console.log('Name at index ' + x + ': ' + names[x]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name, index) {
        console.log('Name is ' + name + ' at index ' + index);
    });
    //
    // var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //
    // function returnArrSum(values) {
    //     var sumAll = 0;
    //     values.forEach(function (value) {
    //         sumAll = sumAll + value;
    //     })
    //     return console.log(sumAll);
    // }
    //
    // returnArrSum(values);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first (inputArr) {
        return console.log(inputArr[0]);
    }
    function second (inputArr) {
        return console.log(inputArr[1]);
    }
    function last (inputArr) {
        return console.log(inputArr[inputArr.length-1]);
    }

first([1, 2, 3, 4, 5]) // returns 1
second([1, 2, 3, 4, 5]) // returns 2
last([1, 2, 3, 4, 5]) // return 5

})();
