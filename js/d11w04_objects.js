(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName : "Rick",
        lastName : 'Sanchez',
    }

    console.log(person.firstName) // "Rick"
    console.log(person.lastName) // "Sanchez"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log ('Hello from Rick Sanchez!');
    };
    person.sayHelloWithInputs = function (input1, input2) {
        console.log('Hello from ' + input1 + ' ' + input2 + '!');
    };
    person.sayHelloWithThis = function () {
        console.log ('Hello from ' + this.firstName + ' ' + this.lastName + '!');
    };

    person.sayHello();
    person.sayHelloWithInputs(person.firstName, person.lastName);
    // person.sayHelloWithInputs(this.firstName, this.lastName);  //why not?
    person.sayHelloWithThis();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopperObj){
        var shopperName = shopperObj.name;
        var shopperAmt = shopperObj.amount;
        if (shopperAmt > 200) {
            var discAmt = shopperAmt * 0.12;
            console.log(shopperName + '\'s amount before: $' + shopperAmt.toFixed(2) + ', and gets a discount of $' + discAmt.toFixed(2) + ' and only pays $' + (shopperAmt - discAmt).toFixed(2));
        } else {
            console.log(shopperName + '\'s amount of $' + shopperAmt.toFixed(2) + ' does not qualify for any discount.');
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'The Rainmaker',
            author: {
                firstName: 'John',
                lastName: 'Grisham'
            }
        },
        {
            title: 'The Stand',
            author: {
                firstName: 'Stephen',
                lastName: 'King'
            }
        },
        {
            title: 'Harry Potter and the Sorcerer\'s Stone',
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        },
        {
            title: 'The Lord of the Rings',
            author: {
                firstName: 'J.R.R.',
                lastName: 'Tolkien'
            }
        },
        {
            title: 'A Tale of Two Cities',
            author: {
                firstName: 'Charles',
                lastName: 'Dickens'
            }
        }
    ]


    console.log(books[0].title); //
    console.log(books[0].author.firstName) //
    console.log(books[0].author.lastName) //

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book, index, array) {
        var bookOrder = index + 1;
        var endOfList = array.length;
        var bookTitle = book.title;
        var authorFirst = book.author.firstName;
        var authorLast = book.author.lastName;
        console.log('Book #', bookOrder);
        console.log('Title:', bookTitle);
        console.log('Author:', authorFirst, authorLast );
        if (index !== endOfList - 1) {
            console.log('----------------')
        };
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var bookArrOfObjs = [];

    function buildBooksArr (inputBookObj, booksArr) {
        booksArr.push(inputBookObj);
        return booksArr;
    }

    function createBook (inputTitle, inputAuthorName) {
        var bookObj = {};
        bookObj.title = inputTitle;
        var authorArr = inputAuthorName.split(' ');
        bookObj.author = {};
        bookObj.author.firstName = authorArr[0];
        bookObj.author.lastName = authorArr[1];
        return bookObj;
    }

    function showBookInfo(inputArrOfBooks) {
        inputArrOfBooks.forEach(function(book, index, array) {
            var bookOrder = index + 1;
            var endOfList = array.length;
            var bookTitle = book.title;
            var authorFirst = book.author.firstName;
            var authorLast = book.author.lastName;
            console.log('Book #', bookOrder);
            console.log('Title:', bookTitle);
            console.log('Author:', authorFirst, authorLast );
            if (index !== endOfList - 1) {
                console.log('----------------')
            };
        })
    }

    buildBooksArr(createBook('The Da Vinci Code', 'Dan Brown'), bookArrOfObjs);
    buildBooksArr(createBook('Murder on the Orient Express', 'Agatha Christie'), bookArrOfObjs);
    buildBooksArr(createBook('The Lion, the Witch and the Wardrobe', 'C.S. Lewis'), bookArrOfObjs);
    buildBooksArr(createBook('The Catcher in the Rye','J.D. Salinger'), bookArrOfObjs);
    buildBooksArr(createBook('The Eagle Has Landed', 'Jack Higgins'), bookArrOfObjs);
    console.log(bookArrOfObjs);

    showBookInfo(bookArrOfObjs);

    // A slightly different way based on an array of books by authors given but reusing functions from above

    var arrayBooksAndAuthors = ['Harry Potter & the Chamber of Secrets by J.K. Rowling', 'The Da Vinci Code by Dan Brown', 'Murder on the Orient Express by Agatha Christie', 'The Lion, the Witch and the Wardrobe by C.S. Lewis','The Catcher in the Rye by J.D. Salinger', 'The Eagle Has Landed by Jack Higgins'];

    var newBookArrOfObjs = [];

    function rfArrBooksToArrObj (inputArrOfBooks, outputArrOfBookObjs) {
        inputArrOfBooks.forEach(function (bookAndAuthor) {
            var splitTitleFromAuthor = bookAndAuthor.split(' by ');
            var bookTitle = splitTitleFromAuthor[0];
            var bookAuthor = splitTitleFromAuthor[1];
            buildBooksArr(createBook(bookTitle, bookAuthor), outputArrOfBookObjs);
            return outputArrOfBookObjs;
        })
    }

    rfArrBooksToArrObj(arrayBooksAndAuthors, newBookArrOfObjs);
    console.log(newBookArrOfObjs);

    showBookInfo(newBookArrOfObjs);

})();