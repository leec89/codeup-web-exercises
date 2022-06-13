/** Ways of getting grandparent element **/

// const grandParent = document.getElementsByClassName("grandparent")  // returns HTMLCollection (gPW1)
// const grandParentArr = Array.from(grandParent)
// changeColor(grandParentArr[0])
// console.log(grandParentArr[0])

// const grandParent = document.getElementById("grandparent-id")       // returns div block (gPW2)
// changeColor(grandParent)
// console.log(grandParent)

// const grandParent = document.querySelector(".grandparent")          // returns HTMLDivElement (gPW3)
// changeColor(grandParent)
// console.log(grandParent)

/** Ways of getting parent(s) element(s) **/

// const parent = document.getElementsByClassName("parent")           // returns HTMLCollection of all parents
// console.log(parent)
// const parents = Array.from(parent)                                 // turns HTMLCollection into array
// changeColor(parents[0])                                            // changes color of first parent
// changeColor(parents[1])                                            // changes color of second parent
// console.log(parents)
// parents.forEach(changeColor)                                       // changes color of all parents

// const parent = document.querySelector(".parent")                   // returns HTMLDivElement, first parent
// console.log(parent)
// changeColor(parent)

// const parents = document.querySelectorAll(".parent")               // returns NodeList (like an array)
// console.log(parents)
// parents.forEach(changeColor)

/** Ways of getting child and children element(s) **/

// const cw1a = document.querySelector(".child")                   // returns first child element
// console.log(cw1a)
// changeColor(cw1a)

// const cW1 = document.getElementsByClassName("child")            // returns HTMLCollection of all child elements
// const allCW1 = Array.from(cW1)                                  // turns HTMLCollection into array
// console.log(cW1)
// console.log(allCW1)
// allCW1.forEach(changeColor)                                     // changes color of all child elements

// const cW2 = document.querySelectorAll(".child")                 // returns Node List of all child elements
// const allCW2 = Array.from(cW2)                                  // turns HTML collection into array
// console.log(cW2)
// console.log(allCW2)
// allCW2.forEach(changeColor)                                     // changes color of all child elements
// changeColor(cW2)

/** Getting parent element starting from grandparent via children **/

// const grandParent = document.querySelector(".grandparent")      // gPW1: do not use! gPW2 & gPW3: OK
// const parent = grandParent.children                             // returns HTMLCollection
// console.log(parent)
// const parents = Array.from(parent)
// parents.forEach(changeColor)


/** Getting child element starting from grandparent via children(twice) **/

// const grandparent = document.querySelector(".grandparent") // returns HTMLDivElement
// console.log(grandparent)                                        // returns HTMLDivElement
// const parents = grandparent.children
// console.log(parents)                                            // returns HTMLCollection
// const parentOne = parents[1]
// console.log(parentOne)                                          // returns div block
// const children = parentOne.children
// changeColor(children[1])

/** Getting all child elements starting from grandparent **/

// const grandparent = document.querySelector(".grandparent")
// console.log(grandparent)
// const children = grandparent.querySelectorAll(".child")
// console.log(children)
// children.forEach(changeColor)

/** Getting to parent element from child via parentElement **/

// const childOne = document.querySelector(".child")
// const parent = childOne.parentElement
// changeColor(parent)

/** Getting to grandparent element from child via parentElement **/

// const childOne = document.querySelector(".child")
// const parent = childOne.parentElement
// const grandparent = parent.parentElement
// changeColor(grandparent)

/** Getting to grandparent element from child via closest **/

// const childOne = document.querySelector(".child")
// const grandparent = childOne.closest(".grandparent")
// changeColor(grandparent)

/** Getting to next sibling element of child via nextElementSibling **/

// const childOne = document.querySelector(".child")
// const childTwo = childOne.nextElementSibling
// changeColor(childTwo)

/** Getting to next sibling element of child via previousElementSibling **/

// const childTwo = document.querySelector("#child-two")
// const childOne = childTwo.previousElementSibling
// changeColor(childOne)

/** Adding 2 parent div elements to grandparent div element **/

// const grandParent = document.querySelector(".grandparent")
// for (let i = 0; i < 2; i++) {                                // creates 2 parent divs in grandparent
//     const newParentBlock = document.createElement("div")
//     newParentBlock.classList.add("parent")
//     newParentBlock.innerHTML =
//         `<div class="child"></div>
//      <div class="child"></div>`
//     grandParent.append(newParentBlock);
// }

/** Adding 2 child div elements to parent div element **/

// const parent = document.querySelector(".parent")
// for (let i = 0; i < 2; i++) {                                // creates 2 child divs in 1st parent
//     const newChild = document.createElement("div")
//     newChild.classList.add("child")
//     parent.append(newChild)
// }

function changeColor(element) {
    element.style.backgroundColor = "blue"
}

// parents[1].style.backgroundColor = "#555"                    // "const variable name".style.backgroundColor = "whatevah color"